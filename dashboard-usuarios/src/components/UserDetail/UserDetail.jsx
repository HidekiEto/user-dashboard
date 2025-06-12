import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './UserCard.css';

// componente que mostra detalhes do usuário em uma página separada
function UserDetail() {
  // pega o id da URL
  const { id } = useParams();
  // guarda os dados do usuário
  const [user, setUser] = useState(null);
  // função para voltar para a página anterior
  const navigate = useNavigate();

  // busca os dados do usuário quando o id muda
  useEffect(() => {
    fetch(`http://localhost:3001/peoples/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error('Erro ao buscar usuário: ', err));
  }, [id]);

  // mostra mensagem enquanto carrega
  if (!user) return <div>Carregando...</div>;

  return (
    <div className="user-card" style={{ margin: "40px auto", maxWidth: 350 }}>
      <img src={user.avatar} alt={`${user.firstName} avatar`} />
      <h3>{user.firstName} {user.lastName}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Endereço:</strong> {user.addres || user.address}</p>
      {/* botão para voltar */}
      <button onClick={() => navigate(-1)} style={{ marginTop: 20 }}>
        Voltar
      </button>
    </div>
  );
}

export default UserDetail;