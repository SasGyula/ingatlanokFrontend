import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'

function Urlap() {
    const { postAdat, katLista } = useContext(ApiContext)
    const [adat, setAdat] = useState({
        kategoria: '1',
        leiras: '...',
        hirdetesDatuma: '1000',
        terhelesmentes: '1',
        ar: '200000000',
        kepUrl: '',
    })
    function adatKuld(event) {
        event.preventDefault()
        console.log("Küldés", adat)
        postAdat("api/ujIngatlan", adat)
    }
    function valtozasKezeles(event) {
        const sv = { ...adat }
        sv[event.target.id] = event.target.value
        setAdat({ ...sv })
    }

    return (
        <div>
            <form onSubmit={adatKuld}>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Ingatlan kategóriája</label>
                    <select className="form-select" aria-label="Kategória" onChange={valtozasKezeles} id='kategoria'>
                        {
                            katLista.map((elem, index) => {
                                return <option key={index} value={elem.id}>{elem.nev}</option>
                            })
                        }
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="hirdetesDatuma" className="form-label">Hirdetés dátuma</label>
                    <input type="date" id="hirdetesDatuma" name="hirdetesDatuma" value={adat.hirdetesDatuma} onChange={valtozasKezeles} />
                </div>

                <div className="mb-3">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leírás" id="leiras" value={adat.leiras} onChange={valtozasKezeles}></textarea>
                        <label htmlFor="leiras">Leírás</label>
                    </div>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="tehermentes" name="tehermentes" value="checkbox" checked />
                        <label class="form-check-label">Tehermentes</label>
                </div>


                <div className="mb-3">
                    <label htmlFor="kepUrl" className="form-label">Kép címe</label>
                    <input type="text" value={adat.kepUrl} onChange={valtozasKezeles} className="form-control" id="kepUrl" aria-describedby="titleHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Urlap;
