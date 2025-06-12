import './Pagination.css';

// aqui criamos o componente de paginação, que recebe a página atual, total de páginas e a função para mudar de página
function Pagination({ currentPage, totalPages, onPageChange }) {
  // criamos uma lista com todos os números de páginas
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    // este bloco mostra os botões de navegação da paginação
    <div className="pagination">
      {/* botão para voltar uma página, fica desabilitado se já estiver na primeira */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      {/* aqui mostramos os botões com os números das páginas */}
      <div className="page-numbers">
        {pageNumbers.map((num) => (
          // cada botão leva para uma página diferente
          <button
            key={num}
            className={num === currentPage ? 'active' : ''}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        ))}
      </div>
      {/* botão para avançar uma página, fica desabilitado se já estiver na última */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
}

export default Pagination;