import { useEffect, useState } from "react"

export function ListaAlumnos() {
    const [alumnos, setAlumnos] = useState ([])

useEffect (() => {
async function cargarAlumnos() {
    const respuesta = await fetch ("http://localhost:5173/alumnos")
    const datos = await respuesta.json()
    console.log(datos)
    
}
cargarAlumnos()
},[])

    return (
    <h2>Alumno</h2>
    )
}