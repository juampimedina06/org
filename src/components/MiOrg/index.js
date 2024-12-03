import React, { useState } from 'react';
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    /*const [mostrar,actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar);  //!concepto de swich
    }*/
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/desaparecer.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg