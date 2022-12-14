import Header from "./components/Header"
import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import ListaDePacientes from "./components/ListaDePacientes"


function App() {
  
   const [pacientes, setPacientes] =useState ([]);
   const [paciente, setPaciente]= useState({});

   useEffect(() =>{
    const obtenerLS = () => {
     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

     console.log(pacientesLS)
    }
     obtenerLS();
   },[])

   useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify (pacientes))
   }, [pacientes])

   const eliminarPaciente = id =>{
    const pacientesActualizados= pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
   }

  return (
    <div className="container mt-20">
    <Header/>

    <div className="mt-12 flex">
     <Formulario

     pacientes={pacientes}
     setPacientes={setPacientes}
     paciente={paciente}
     setPaciente={setPaciente}
     />
     
     <ListaDePacientes
     pacientes={pacientes}
     setPaciente={setPaciente}
     eliminarPaciente={eliminarPaciente}
     />
    </div>

    </div>
  )
}

export default App
