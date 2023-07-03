import './saludo.scss'

export const Saludo = ({nombre}) => {
    return (
        <div className="contenedor__saludo">
            <p className="parrafo__saludo">
                Todo lo que bustas {nombre} esta aquí
            </p>
        </div>
    )

}