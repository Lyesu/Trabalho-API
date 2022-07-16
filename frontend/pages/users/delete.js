import api from "../../services/api";
import { useState, useEffect } from "react";

export default function DeleteUser() {
  const [users, setUsers] = useState();
  const [userId, setUserId] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  async function deleteUser() {
    api
      .delete(`/users/${userId}`)
      .then(() => {
        alert("Usuário removido!");
        setLoadUsers(true);
      })
      .catch((e) => {
        alert(`Erro: ${e}`);
      });
  }

  function onChange(e) {
    setUserId(parseInt(e.target.value));
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(userId);
  return (
    <div class="formulario">
            <h1>Deletar Usuário</h1>
          <div class="imgDel">
            <img src="https://cdn-icons-png.flaticon.com/512/1250/1250743.png"></img>
          </div> 
            <form >
              <select onChange={onChange} defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>
                  Selecione um usuário
                </option>
                {users?.map((user) => {
                  return <option value={user.id}>{user.name}</option>;
                })}
              </select>
            </form>
              <div class="espaco">
            <button onClick={() => deleteUser()}>Deletar usuário</button>
                </div>      
            <footer>
              <a href="/users/list">Voltar para lista de usuários</a>
            </footer>
          </div>
  );
}
