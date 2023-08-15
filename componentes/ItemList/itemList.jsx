import ItemCard from "../ItemCard/ItemCard"
import "./itemList.scss"


const ItemList = ({productos}) => {

    return (
        <div className='container catalogo__contenedor'>
            <div className='flex flex-row flex-wrap justify-center gap-2'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList