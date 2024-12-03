import "./Colaborador.css"
import { IoCloseCircle} from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";

const Colaborador = (props) => {
    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorSecundario, eliminarColaborador, like} = props


    // condicion ? verdadero : falso;

    return <div className="colaborador">
        <IoCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor:colorSecundario}}>
            <img src={foto} alt={foto}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <IoHeart color="red" onClick={() => like(id)} /> : <IoMdHeartEmpty onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador