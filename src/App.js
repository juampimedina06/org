import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo:"Front End",
    foto:"https://github.com/juampimedina06.png",
    nombre:"Juan Pablo Medina",
    puesto:"Junior",
    id: uuid(),
    fav:true
  },
  {
    equipo: "Programacion",
    foto: "https://randomuser.me/api/portraits/men/10.jpg",
    nombre: "Santiago Pérez",
    puesto: "Mid-Level",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Data Science",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
    nombre: "Valeria Gómez",
    puesto: "Senior",
    id: uuid(),
    fav: false
  },
  {
    equipo: "Devops",
    foto: "https://randomuser.me/api/portraits/men/20.jpg",
    nombre: "Ignacio Fernández",
    puesto: "Junior",
    id: uuid(),
    fav: false
  },
  {
    equipo: "UX y Diseño",
    foto: "https://randomuser.me/api/portraits/women/15.jpg",
    nombre: "Sofía Torres",
    puesto: "Senior",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Movil",
    foto: "https://randomuser.me/api/portraits/men/25.jpg",
    nombre: "Marcos Villar",
    puesto: "Mid-Level",
    id: uuid(),
    fav: false
  },
  {
    equipo: "Investigacion y gestion",
    foto: "https://randomuser.me/api/portraits/women/18.jpg",
    nombre: "Camila Rojas",
    puesto: "Junior",
    id: uuid(),
    fav: true
  }
]);
  


  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#D9F7E9",
      colorSecundario: "#57C278",
      fav:false
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#E8F8FF",
      colorSecundario: "#82CFFA",
      fav:false
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#F0F8E2",
      colorSecundario: "#A6D157",
      fav:false
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#FDE7E8",
      colorSecundario: "#E06B69",
      fav:false
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#FAE9F5",
      colorSecundario: "#DB6EBF",
      fav:false
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFF5D9",
      colorSecundario: "#FFBA05",
      fav:false
    },
    {
      id: uuid(),
      titulo: "Investigacion y gestion",
      colorPrimario: "#FFEEDF",
      colorSecundario: "#FFBA29",
      fav:false
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

   //Registar colaborador
    const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorSecundario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  // Crear nuevo equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  //like
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="div">
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
