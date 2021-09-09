import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import './item.css';

function Item({ item }) {
    const onAdd = (count)=>{
        alert(`La cantidad es: ${count}`)
    }

    return (
        <React.Fragment>
            <div
                data-aos='fade-up'
                className='col-12 col-md-6 col-lg-4 col-xl-3'
            >
                <div className='card-ecommerce'>
                    <i className="icon-favorites-card far fa-heart" />
                    <img className="img-item" src={item.url} alt="" />
                    <h2 className="name">{item.nombre}</h2>
                    <h2 className="price">{item.precio}</h2>
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item