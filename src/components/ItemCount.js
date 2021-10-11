import { useState } from "react";
import "../App.css";
import ButtonGroup from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemCount = ({ cantidad = 1, stock = 0, initial = 1, onChange }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count <= stock - cantidad) {
      setCount(count + cantidad);
      onChange(count + cantidad);
    }
  };

  const handlerRestar = () => {
    if (count > cantidad - 1) {
      setCount(count - cantidad);
      onChange(count - cantidad);
    }
  };

  return (
    <>
      <ButtonGroup size="lg" className="mb-2" variant="secondary">
        <i class="bi bi-dash-circle-fill" onClick={handlerRestar}></i>
        <span className="spanCounter">{count} </span>
        <i class="bi bi-plus-circle-fill" onClick={onAdd}></i>
      </ButtonGroup>
      <br />
      <button type="button" class="btn btn-outline-warning btnAgregar" >
        <Link to="/carrito" class="link-dark" className='boton'> Agregar al carrito</Link>
      </button>
      <button type="button" class="btn btn-outline-warning btnAgregar">
        <Link to="/carrito" class="link-dark"  className='boton'> Terminar compra</Link>
      </button>
    </>
  );
};

export default ItemCount;
