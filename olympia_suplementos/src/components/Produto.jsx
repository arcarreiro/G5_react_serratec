import '../css/produto.css'
const Produto = ({ id, url, nome, descricao, preco, categoria, estoque, onComprarClick, onAdicionarCarrinhoClick }) => {
    return (
        <>
            <div className="card" key={id}>
                <img style={{width: 200}} src={url} />
                <p>{nome}</p>
                <p>{descricao}</p>
                <p>{preco.toFixed(2)}</p>
                <div className="botoes">
                    <button className='botao' onClick={() => { onAdicionarCarrinhoClick(id) }}>Adicionar ao carrinho</button>
                    <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button> 
                </div>
            </div>
        </>
    )

}

export default Produto