import React, { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AppContext from "../Context/AppContext";
import "../Styles/Components/Information.css";

function Information() {
  const { addToBuyer, carrito } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      cp: formData.get("cp"),
      phone: formData.get("phone"),
    };
    const {name, email, address, city, country, state, cp, phone} = buyer;
    if (
      name === "" ||
      email === "" ||
      address === "" ||
      city === "" ||
      country === "" ||
      state === "" ||
      cp === "" ||
      phone === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    addToBuyer(buyer);
    history.push("/checkout/payment");
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {carrito.map((product) => (
          <div className="Information-item" key={product.item.id}>
            <div className="Information-element">
              <h4>{product.item.name}</h4>
              <span>$ {product.item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
