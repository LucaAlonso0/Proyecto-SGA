import { useEffect, useState } from "react"

export function ListaAlumnos() {
    const [alumnos, setAlumnos] = useState ([])

useEffect (() => {
    console.log ("ListaAlumnos apareció")
},[])
    return (
    <h2>Alumno</h2>
    )
}