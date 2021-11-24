import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const tarefa = props.data;

  return (
    <Link to={`/view/${tarefa._id}`} className="col indexcard">
      <div className="card-index">
        <div className="card-body">
          <h3 className="card-title d-flex justify-content-center">
            {tarefa.titulo}
          </h3>
          <h5>
            Status:
            <span color="red" className="d-flex">
              {tarefa.statusTarefa}
            </span>
          </h5>
          <h5>
            Prioridade:<span className="d-flex">{tarefa.prioridade}</span>
          </h5>
          <p className="card-text">Clique no Card para ver a Descrição</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
