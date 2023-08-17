import ItemCard from "../ItemCard/ItemCard"
import "./itemList.scss"


const ItemList = ({productos}) => {

    return (
        <div className='container catalogo__contenedor'>
            <div className='card_contenedor'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList