import {Header} from "./Header.tsx";
import {FormProduct} from "./FormProduct.tsx";
import { ListProduct } from "./ListProduct.tsx";
import {useState} from "react";

interface ItemProduct {
    nombre: string;
    imagen: string;
    precio: number;
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([]);

    console.log(products);

    const handleAddProduct = (product: ItemProduct) => {
        setProducts([...products, product]);
    }

    return (
        <div>
            <Header/>
            <h2 className="text-center">Formulario</h2>
            <FormProduct handleAddProduct={handleAddProduct}/>

            <h2 className="text-center">Productos</h2>
            {products.length > 0 ? <ListProduct arrItems={products}/>: <h2>No hay productos</h2>}
        </div>
    )
}