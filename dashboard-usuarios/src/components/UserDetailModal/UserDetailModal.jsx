import './UserDetailModal.css';

// componente que mostra os detalhes do usuário em um modal
function UserDetailModal({ user, onClose }) {
  return (
    // ao clicar fora do conteúdo, fecha o modal
    <div className="modal-backdrop" onClick={onClose}>
      {/* impede que o clique dentro do conteúdo feche o modal */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* botão para fechar o modal */}
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={user.avatar} alt={`${user.firstName} avatar`} className="modal-avatar" />
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        {/* mostra o endereço, independente do nome do campo */}
        <p><strong>Endereço:</strong> {user.addres || user.address}</p>
      </div>
    </div>
  );
}

export default UserDetailModal;