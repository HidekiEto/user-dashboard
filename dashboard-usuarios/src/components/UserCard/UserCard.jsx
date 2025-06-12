import './UserCard.css';
import { useState } from "react";
import UserDetailModal from "./UserDetailModal";

function UserCard({ user }) {
  // controla se o modal está aberto ou fechado
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ao clicar no cartão, abre o modal */}
      <div className="user-card" onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
        <img src={user.avatar} alt={`${user.firstName} avatar`} />
        <h3>{user.firstName}</h3>
      </div>
      {/* mostra o modal com detalhes do usuário */}
      {showModal && (
        <UserDetailModal user={user} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default UserCard;
