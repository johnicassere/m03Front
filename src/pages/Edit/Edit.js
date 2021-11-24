import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Api from "../../api/api";

const Edit = () => {
  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState({
    titulo: "",
    descricao: "",
    prioridade: "",
    statusTarefa: "",
    prazo: "",
  });

  useEffect(() => {
    getTarefaById();
  }, []);

  const { id } = useParams();

  const getTarefaById = async () => {
    const request = await Api.fetchGetById(id);
    const tarefa = await request.json();
    setTarefa(tarefa);
  };
  const handleFieldsChange = (evento) => {
    const tarefaEdit = { ...tarefa };
    tarefaEdit[evento.target.name] = evento.target.value;
    //console.log(tarefaEdit);
    setTarefa(tarefaEdit);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const request = await Api.fetchPut(tarefa, id);
    const data = await request.json();
    alert(data.message);
    navigate('/');
    //navigate(`/view/${id}`);
  };

  const voltar = async (evento) => {
    evento.preventDefault();
    navigate(`/view/${id}`);
  };

  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3 className="mx-3 my-3 text-center">Editar Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
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
                    value={tarefa.titulo}
                    onChange={handleFieldsChange}
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
                    value={tarefa.descricao}
                    onChange={handleFieldsChange}
                    name="descricao"
                  />
                </div>
              </div>

              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prioridade">Prioridade:</label>
                  <select
                    value={tarefa.prioridade}
                    onChange={handleFieldsChange}
                    name="prioridade"
                    id="prioridade"
                    className="form-control"
                  >
                    <option value="Min">Baixa</option>
                    <option value="Medio">Média</option>
                    <option value="Max">Alta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="statusTarefa">Status da Tarefa:</label>
                  <select
                    value={tarefa.statusTarefa}
                    onChange={handleFieldsChange}
                    name="statusTarefa"
                    id="statusTarefa"
                    className="form-control"
                  >
                    <option value="Min">Fazer</option>
                    <option value="Medio">Fazendo</option>
                    <option value="Max">Feito</option>
                  </select>
                </div>
              </div>
              <div className="col-4">
                <div className="form-group">
                  <label htmlFor="prazo">Prazo da Tarefa:</label>
                  <input
                    id="prazo"
                    type="date"
                    value={tarefa.prazo}
                    onChange={handleFieldsChange}
                    className="form-control"
                    placeholder="Prazo da Tarefa"
                    name="prazo"
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-end justify-content-around">
                <button type="submit" className="btn btn-success">
                  Editar
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
    </div>
  );
};

export default Edit;
