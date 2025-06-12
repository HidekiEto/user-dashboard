import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import Pagination from "./components/Paginação/Pagination";
import './App.css';

// quantidade de usuários por página
const usuariosPorPagina = 5;

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3001/peoples')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Erro ao buscar usuários: ', err));
  }, []);

  // Paginação
  const totalPages = Math.ceil(users.length / usuariosPorPagina);
  const startPage = (currentPage - 1) * usuariosPorPagina;
  const paginatedUsers = users.slice(startPage, startPage + usuariosPorPagina);

  // função para mudar de página
  const mudarPagina = (novaPagina) => {
    if (novaPagina >= 1 && novaPagina <= totalPages) {
      setCurrentPage(novaPagina);
    }
 };

  // posição inicial da lista de usuários para a página atual
  const indiceInicial = (currentPage - 1) * usuariosPorPagina;

  return (
    <div className="App">
      <h1>Dashboard de Usuários</h1>
      <p>Total de usuários: {users.length} </p>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={mudarPagina}
      />
      <div className="user-container">
        {paginatedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;