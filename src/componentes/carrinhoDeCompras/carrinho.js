import "./carrinho.css";
import "./reset.css";

function Carrinho({ carrinho, setCarrinho }) {

  function deletarCarrinho(produto) {
    const novoCarrinho = carrinho.filter((item) => item.id !== produto.id);
    setCarrinho(novoCarrinho);
  }
  const cardsCarrinho = carrinho.map((p, i) => (
    <div className="cardsCarrinho">
      <figure className="figura">
        <img className="imagemCarrinho" src={p.img} alt="logo" />
      </figure>

      <div className="caixaDeInformacoes">
        <h2 className="tituloProduto texto" key={i}>
          {p.name}
        </h2>
        <h3 className="categoriaProduto texto">{p.category}</h3>
        

        <button className="botaoProdutoCarrinho" onClick={() => deletarCarrinho(p)}>
          remover
        </button>
      </div>
    </div>
  ));
  return (
    <div className="carrinhoCompras">
      
        <h2 className="tituloCarrinho">Carrinho de compras</h2>
        <ul className="listaCarrinho">
          {carrinho.length === 0 ? (
            <li className="minhaLista">
            <div className="caixaDeTexto">
              <p className="textoInicial">Sua sacola esta fazia</p>
              <p className="subTexto">Adicione itens</p>
            </div>
            </li>
          ) : (
            <>
             <li className="meusProdutos">
            {cardsCarrinho}
            </li>
            
            </>
          )}

             
        </ul>
        {carrinho.length === 0 ?(null):(<div className="caixaValorTotal">
            <div className="caixaEspaço"><p className="textoValorTotal">Total:</p> <p className="valor"> R$:{carrinho.reduce((acumulador,produto)=>acumulador+Number(produto.price.toFixed()),0)}</p></div>
            <button className="botaoRemoverTodos" onClick={()=>setCarrinho([])}>Remover todos</button>
            </div>)}
       </div>
        
  );
}

export default Carrinho;
