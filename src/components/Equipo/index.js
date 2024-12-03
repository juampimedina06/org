import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {

    //!Destructuracion
    const { colorPrimario, colorSecundario,titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const estiloTitulo = {borderColor: colorSecundario}
    const obj = {
        backgroundColor : hexToRgba(colorSecundario, 0.6)
    }

    return <>
        { colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) =>{
                actualizarColor(evento.target.value, id)
                
                }}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index, id) => <Colaborador
                    id={id}
                    datos={colaborador} 
                    key={index} 
                    colorSecundario={colorSecundario} 
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }
        </div>
    
        </section>
    }
    </>
}

export default Equipo