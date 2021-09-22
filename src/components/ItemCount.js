import { useState } from "react";
import "../App.css";
import ButtonGroup from "react-bootstrap/Button";

const ItemCount = ({ cantidad = 1 , stock = 0, initial=1}) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count <= (stock - cantidad)) {
        setCount(count + cantidad);
    }
  };

  const handlerRestar = () => {
    if (count > cantidad - 1) {
      setCount(count - cantidad);
    }
  };

  return (
    <>
      <ButtonGroup size="lg" className="mb-2" variant="secondary">
        <i class="bi bi-dash-circle-fill" onClick={handlerRestar}></i>
        <span className="spanCounter">{count} </span>
        <i class="bi bi-plus-circle-fill" onClick={onAdd}></i>
      </ButtonGroup>
      <br/>
      <button type="button" class="btn btn-outline-primary btnAgregar">
          <p> Agregar al carrito</p>
      </button>
    </>
  );
};

export default ItemCount;
