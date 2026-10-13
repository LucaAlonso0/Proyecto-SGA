import { useEffect, useState } from "react"

export function ListaAlumnos() {
    const [alumnos, setAlumnos] = useState([])

    useEffect(() => {
        async function cargarAlumnos() {
            try {
                const respuesta = await fetch("http://localhost:3000/alumnos")

                if (!respuesta.ok)
                    throw new Error("No se pudo obtener la lista", respuesta.status)

                const datos = await respuesta.json()
                console.log(datos)
                setAlumnos(datos)
            } catch (error) {
                console.error(error)
            }
        }

        cargarAlumnos()
    }, [])

    return (
        <>
            <h2>Alumnos</h2>
            {alumnos.map(alumno => (
                <p key={alumno.legajo}>
                    {alumno.legajo} - {alumno.nombre} - {alumno.carrera}
                </p>
            ))}
        </>
    )
}
