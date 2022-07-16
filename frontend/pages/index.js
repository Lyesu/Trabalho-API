import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>API Node</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <main>
        <div className="titles">
          <h1>Move To Here </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a className="title" href="/users/list">
                Usuários
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <div className="foto2">
      <img src="https://s2.glbimg.com/JNQdSwXprxCWtgEpFzGHKQY93mE=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/D/b/mIsAwNQuKR5BfoVoAwxg/2015-08-12-300c-1024x768jpg.jpg"></img>
      </div>
      <div className="sobre">
        
        <p>Sobre</p>
        <p>痛み自体は愛、主な顧客です少なくともオークの構成の前に。それは、湖の流れの要素であるオクラホマプロパガンダの病気です。これは不動産の前で恥ずべきことです。 Mauris dictum molstie enimvelsuscipit。アンティポスエールバリウスのヒトのサピエン。痛み自体は愛、主な顧客です少なくともオークの構成の前に。それは、湖の流れの要素であるオクラホマプロパガンダの病気です。これは不動産の前で恥ずべきことです。 Mauris dictum molstie enimvelsuscipit。アンティポスエールバリウスのヒトのサピエン。
 </p>
      </div>
      <div className="contatos">
        <p>Contatos</p>
        <p>Rua do Sei lá o que 200 4000</p>
        <p>Telefone: 55 (55) 95555-5555</p>
        <p>E-mail: carro345367389@gmail.com</p>
        <p>CEP: 354353515135-090</p>

      </div>
      </body>
      <footer>
        <p>API Desenvolvida na cadeira de Programação WEB</p>
      </footer>
    </div>
  );
}