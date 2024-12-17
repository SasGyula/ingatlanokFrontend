import React from 'react'

function Ingatlan(props) {
    return (
        <tr key={props.index}>
            <td>{props.elem.nev}</td>
            <td>{props.elem.leiras}</td>
            <td>{props.elem.hirdetesDatuma}</td>
            <td>{props.elem.terhelesmentes}</td>
            <td><img src={props.elem.kepUrl} alt="kep" className='img-thumbnail' /></td>
        </tr>
)
}


export default Ingatlan
