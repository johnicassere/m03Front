import React from "react";
import Api from "../../api/api";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prioridade = evento.target.prioridade.value;
    const statusTarefa = evento.target.statusTarefa.value;
    const prazo = evento.target.prazo.value;

    const tarefa = {
      titulo,
      descricao,
      prioridade,
      statusTarefa,
      prazo,
    };

    const request = await Api.fetchPost(tarefa);
    if (request.statusTarefa === 500) {
      alert("Erro No Servidor");
    }
    const result = await request.json();
    if (result.error) {
      console.log(result.error);
    } else {
      alert(result.message);
      navigate("/");
    }
  };
  const voltar = async (evento) => {
    evento.preventDefault();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card-title">
        <div className="row"></div>
      </div>
      <div className="card-body">
        <div className="col">
          <h3 className="mx-3 my-3 text-center">Cadastro de Tarefas</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="titulo">Nome da Tarefa:</label>
                <input
                  id="titulo"
                  className="form-control"
                  type="text"
                  placeholder="Nome da Tarefa"
                  name="titulo"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="descricao">Descrição:</label>
                <input
                  id="descricao"
                  type="text"
                  className="form-control"
                  placeholder="Descrição"
                  name="descricao"
                />
              </div>
            </div>
            <div className="col-4">
              <label htmlFor="prioridade">Prioridade:</label>
              <select
                name="prioridade"
                id="prioridade"
                className="form-control"
              >
                <option value="Baixa">Baixa</option>
                <option value="Media">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="statusTarefa">Status da Tarefa:</label>
                <select
                  name="statusTarefa"
                  id="statusTarefa"
                  className="form-control"
                >
                  <option value="Fazer">Fazer</option>
                  <option value="Fazendo">Fazendo</option>
                  <option value="Feito">Feito</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="prazo">Prazo da Tarefa:</label>
                <input
                  id="prazo"
                  type="date"
                  className="form-control"
                  placeholder="date"
                  name="prazo"
                />
              </div>
            </div>
            <div className="col-4 d-flex align-items-end justify-content-around">
              <button type="submit" className="btn btn-success">
                Criar
              </button>
              <form onClick={voltar}>
                <button type="button" className="btn btn-danger">
                  Voltar
                </button>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
