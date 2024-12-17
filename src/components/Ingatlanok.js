import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import Ingatlan from './Ingatlan'
function Ingatlanok() {
    const { ingatlanLista } = useContext(ApiContext)
    console.log(ingatlanLista)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Kategória</th>
                        <th scope="col">Leírás</th>
                        <th scope="col">Hírdetés dátuma</th>
                        <th scope="col">Terhelésmentes</th>
                        <th scope="col">Fénykép</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ingatlanLista.map((elem, index) => {
                            return <Ingatlan elem={elem} key={index} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Ingatlanok
