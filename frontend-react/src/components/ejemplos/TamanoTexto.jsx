import { useState } from "react"

function TamanoTexto() {
    const [tamano, setTamano] = useState("24px")

    return (
        <>
        <p style={{ fontSize: tamano, fontWeight: "bold" }}>
            Bienvenidos a Programación IV
        </p>
        <div style={{display: "flex", justifyContent: "center", gap: 10}}>
            <button onClick={() => setTamano("16px")}>Pequeño</button>
            <button onClick={() => setTamano("24px")}>Mediano</button>
            <button onClick={() => setTamano("40px")}>Grande</button>
        </div>
        </>
    )
}
export default TamanoTexto
