//atividade 0212
import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/atividade3">Home</Link>
      </li>
      <li>
        <Link to="/atividade3/produtos">Produtos</Link>
      </li>
    </ul>
  );
};

export default Header;
