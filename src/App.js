
import './App.css';
import Header from './componentes/header/header';
import Carrinho from './componentes/carrinhoDeCompras/carrinho';
import ListaDeProdutos from './componentes/listaDeProdutos/produtos';
import { useEffect, useState } from 'react';


function App() {
   const [itens,setItens] = useState ([])
   const [input, setInput] = useState ("")
   const [carrinho,setCarrinho] = useState([])

      useEffect(()=>{fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then(response => response.json())
      .then((response)=> setItens(response))},[input])

   
   
   return(
      
       <div className='app'>
          <Header  input={input} setInput={setInput} itens={itens} setItens={setItens}/>
   
         <div className='finalizacao'>
          <main>
            <ul className='produtosUl'><ListaDeProdutos itens={itens} carrinho={carrinho} setCarrinho={setCarrinho}/></ul>
         </main>

         <div className='carrinhoApp'>

          
          <Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>

         </div>

         </div>

        
       </div>
   )
    
    
  
}

export default App;
