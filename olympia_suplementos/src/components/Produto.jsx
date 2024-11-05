import '../css/produto.css'
const Produto = ({ url, nome, descricao, preco, index }) => {
    return (
        <>
            <div className="card" key={index}>
                <img style={{width: 200}} src={url} />
                <p>{nome}</p>
                <p>{descricao}</p>
                <p>{preco}</p>
                <div className="botoes">
                    <button className='botao'>Adicionar ao carrinho</button>
                    <button className='botao'>Comprar</button> 
                </div>
            </div>
        </>
    )

}

export default Produto