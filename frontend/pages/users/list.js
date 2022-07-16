import api from "../../services/api";
import { useState, useEffect } from "react";

export default function ListUsers() {
  const [users, setUsers] = useState();
  const [loadUsers, setLoadUsers] = useState(true);

  async function getUsers() {
    api.get("/users").then((res) => {
      const { data } = res;
      setUsers(data.users);
    });
  }

  useEffect(() => {
    getUsers();
    setLoadUsers(false);
  }, [loadUsers]);

  console.log(users);
  return (
    <div>
      <h1 className="title">Usuários</h1>
      <h1>気です。これは不動産の前で恥ずべきことです。 Mauris dictum molstie enimvelsuscipit。アンティポスエールバリウスのヒトのサピエン。痛み自体は愛、主な顧客です少なくともオークの構成の前に。それは、湖の流れの要素であるオクラホマプロパガンダの病気です。これは不動産の前で恥ずべきことです。 Mauris dictum molstie enimvelsuscipit。アンティポスエールバリウスのヒトのサピエン。</h1>
      <table>
        <thead>
          <tr>
            <div className="info">
            <br />
             <th scope="col">Id</th>
             <br />
             <th scope="col">Nome</th>
             <br />
             <th scope="col">Idade</th>
             <br />
            </div>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.idade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <footer>
      <div className="jorge">
        <br />
        <a href="/">Voltar para home</a>
        <br />
        <img src="https://ae01.alicdn.com/kf/H92a30e9b08344499911b2109e7d3cf0f1/Kame-casa-gk-resina-limitada-est-tua-figura.jpg_640x640.jpg"></img>

        <a href="/users/create">Criar usuário</a>

        <img src="https://cdn.pixabay.com/photo/2017/07/11/13/56/user-2493635_640.png"></img>
        <br />
        <a href="/users/update">Atualizar usuário</a>
        <br />
        <img src="https://cdn-icons-png.flaticon.com/512/46/46640.png"></img>

        <a href="/users/delete">Deletar usuário</a>

        <img src="https://1001freedownloads.s3.amazonaws.com/icon/thumb/615/delete-user.png"></img>
        <br />
        </div>
      </footer>
    </div>
  );
}