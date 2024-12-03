import React, { useState } from 'react';
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { v4 as uuid } from 'uuid';
import Modal from '../Modal';

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const [mostrarModal, setMostrarModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');

    const { registrarColaborador, crearEquipo } = props;

    // Manejar envío de colaborador
    const manejarEnvio = (e) => {
        e.preventDefault();
        const datosAEnviar = {
            id: uuid(),
            nombre,
            puesto,
            foto,
            equipo,
        };
        registrarColaborador(datosAEnviar);

        // Actualizar el mensaje del modal
        setMensajeModal(`¡Colaborador ${nombre} creado con éxito!`);
        mostrarYOcultarModal();
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorSecundario: color });

        setMensajeModal(`¡Equipo ${titulo} creado con éxito!`);
        mostrarYOcultarModal();
    };

    const mostrarYOcultarModal = () => {
        setMostrarModal(true);
        setTimeout(() => {
            setMostrarModal(false);
        }, 1000);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo
                    titulo="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <Campo
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    actualizarValor={actualizarPuesto}
                />
                <Campo
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    actualizarValor={actualizarFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={props.equipos}
                />
                <Boton>Crear</Boton>
            </form>

            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo
                    titulo="Titulo"
                    placeholder="Ingresar Titulo"
                    required
                    valor={titulo}
                    actualizarValor={actualizarTitulo}
                />
                <Campo
                    titulo="Color"
                    placeholder="Ingresar el color en hex"
                    required
                    valor={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>Registrar Equipo</Boton>
            </form>

            {mostrarModal && <Modal mensaje={mensajeModal} />}
        </section>
    );
};

export default Formulario;
