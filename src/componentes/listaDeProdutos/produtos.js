

import "./produtos.css"


function ListaDeProdutos ({itens,carrinho,setCarrinho}){
   
      function verificarId(produto){

         !carrinho.some(item=> item.id === produto.id) && setCarrinho([...carrinho,produto])

      }
      
     const CardsProdutos = itens.map(
        
        (p,i)=>
     
        <div key={i} className="cards">

        <figure className="figura">
        <img className='imagem' src={p.img} alt="logo" />
        </figure>

        <div className="caixaDeInformacoes">
            <h2 className="tituloProduto texto">{p.name}</h2>
            <h3 className="categoriaProduto texto">{p.category}</h3>
            <h3 className="valorProduto texto">R$:{p.price}</h3>

            <button className="botaoProduto" onClick={()=>verificarId(p)}>Adicionar</button>
        </div>

        </div>
       )
    
        
      return (
        CardsProdutos
      )
      

      
    }

    export default ListaDeProdutos