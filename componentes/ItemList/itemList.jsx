import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({productos}) => {

    return (
        <div className="container">
            <div className='flex flex-row flex-wrap justify-center gap-2'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList