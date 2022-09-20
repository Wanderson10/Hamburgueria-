 import "./header.css"
 
 function Header ({input, setInput,itens,setItens}){
    function filtrarProdutos(){

         const filtros =  itens.filter((produto)=>{
            return (produto.name.toLowerCase().includes(input.toLowerCase()) || produto.category.toLowerCase().includes(input.toLowerCase())) 

         })
         setItens(filtros)
    }
    return(
        <header className="cabecalho">
            <div className="logo">

                <h2 className="logo1">Burguer</h2> <h3 className="logo2">Wandi</h3>

            </div>

             <div className="barraDePesquisa">
                <input className ="imputPesquisa" onChange={event=>setInput(event.target.value)}></input>
                <button className="butaoHeader"  onClick={()=>filtrarProdutos()}>pesquisar</button>
             </div>
        </header>
        
        
        )
}

export default Header