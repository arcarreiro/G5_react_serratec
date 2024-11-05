import '../css/produto.css'
const Produto = ({ url, nome, descricao, preco, index, onComprarClick, onAdicionarCarrinhoClick }) => {
    return (
        <>
            <div className="card" key={index}>
                <img style={{width: 200}} src={url} />
                <p>{nome}</p>
                <p>{descricao}</p>
                <p>{preco.toFixed(2)}</p>
                <div className="botoes">
                    <button className='botao' onClick={() => { onAdicionarCarrinhoClick(index) }}>Adicionar ao carrinho</button>
                    <button className='botao' onClick={() => { onComprarClick(index) }}>Comprar</button> 
                </div>
            </div>
        </>
    )

}

export default Produto