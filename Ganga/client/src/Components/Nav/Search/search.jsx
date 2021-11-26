import React from "react";
import { ImSearch } from "react-icons/im";

export default function BuscarProducto() {
  function handleSubmit() {}

  function handleInput() {}

  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit} className="pl-2 pt-2">
        <ImSearch />
      </button>
    </div>
  );
}
