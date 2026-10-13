import { useState } from "react";

export function Adivina(){
    const [seleccion, setSeleccion] = useState("")
    const [resultado, setResultado] = useState("")
    const [color, setColor] = useState("black")
    const [partidas, setPartidas] = useState(0)
    const [ganadas, setGanadas] = useState(0)
    const [perdidas, setPerdidas] = useState(0)

    function sortear(){
        const ganador = Math.floor(Math.random() * 10) + 1
        const elegido = Number(seleccion)

        if (seleccion === ""){
            setResultado("Ingresá un número")
            setColor("black")
            return
        }
        if (elegido < 1 || elegido > 10){
            setResultado("Ingresá un número entre 1 y 10")
            setColor("black")
            return
        }

        // Jugada válida: se cuenta la partida
        setPartidas(partidas + 1)

        if (elegido === ganador){
            setResultado(`Ganaste. Salió ${ganador} y elegiste ${elegido}.`)
            setColor("green")
            setGanadas(ganadas + 1)
        } else {
            setResultado(`Perdiste. Salió ${ganador} y elegiste ${elegido}.`)
            setColor("red")
            setPerdidas(perdidas + 1)
        }
    }
    return (
        <>
        <h2>Adiviná el número</h2>
        <input type="number" value={seleccion}
        onChange={(e) => setSeleccion(e.target.value)}/>
        <button onClick={sortear}>Adivinar</button>
        <p style={{ color: color }}>{resultado}</p>

        <div style={{ fontWeight: "bold" }}>
            <p>Partidas jugadas: {partidas}</p>
            <p>Ganadas: {ganadas}</p>
            <p>Perdidas: {perdidas}</p>
        </div>
        </>
    )
}
