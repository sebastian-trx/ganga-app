import React from "react";
import { ImSearch } from "react-icons/im";

export default function BuscarProducto() {
  function handleSumit() {}

  function handleInput() {}

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del producto"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSumit}>
        <ImSearch />
      </button>
    </div>
  );
}
