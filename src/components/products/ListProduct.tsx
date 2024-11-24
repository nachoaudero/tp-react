import {FC} from "react";
import {Card} from "react-bootstrap";

interface ItemProduct {
    nombre: string;
    imagen: string;
    precio: number;
}

interface IPropsListProduct {
    arrItems: ItemProduct[];
}

export const ListProduct: FC<IPropsListProduct> = ({arrItems}) => {
    return <div className="p-1 m-3 border rounded d-grid gap-2" style={{gridTemplateColumns:"repeat(2, 1fr)", justifyItems: "center", alignItems: "center"}}>
        {
            arrItems.map((el, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.imagen} />
                    <Card.Body>
                        <Card.Title>{el.nombre}</Card.Title>
                        <Card.Text>{el.precio}</Card.Text>
                    </Card.Body>
                </Card>
            ))
        }
    </div>
}