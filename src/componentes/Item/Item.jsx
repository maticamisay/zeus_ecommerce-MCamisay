import React from 'react';
import ItemCount from './ItemCount';
import './item.css';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function Item({ item }) {
    const onAdd = (count)=>{
        alert(`La cantidad es: ${count}`)
    }

    return (
        <React.Fragment>
            <Card className="m-5" style={{ width: '18rem' }}>
                <Card.Img className="img-item m-auto" variant="top" src={item.url} />
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>
                    ${item.precio}
                    </Card.Text>
                    <Link to={`/detalle/${item.id}`}>
                        Detalle
                    </Link>
                    <ItemCount initial={1} stock={5} onAdd={onAdd} id={item.id}/>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default Item