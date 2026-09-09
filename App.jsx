import { useState } from 'react'
import { NavBar } from "./componentes/navbar.jsx";
import { Produto } from "./componentes/produto.jsx";

export default function App() {
  const [tarefas,setTarefas] = useState([]);
  const [tarefa,setTarefa] = useState("");
const [menu, setMenu] = useState([{name:"home", url:"#"},{name: "carrinho", url:"#"}]);
  return (
    <>
      <NavBar items={menu}/>
      <Produto/>
      <Produto/>
      <Produto/>
      
      <input type ="text"onChange = {(e) => setTarefa=(e.target.value)} value = {tarefa} />
      < button onClick ={ () => {setTarefas([...tarefas,tarefa]); setTarefa("");}}> adicionar </button>
      <ul>
        {tarefas.map((t) => <li> {t} </li>)}
      </ul>
    </>
  );
}
