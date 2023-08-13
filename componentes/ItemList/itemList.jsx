import ItemCard from "../ItemCard/ItemCard"
import "./itemList.scss"


const ItemList = ({productos}) => {

    return (
        <div className="container">
            <div className="grid">
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList