const Item = ({ id, imgurl, nome, descricao, preco, estoque, onComprarClick}) => {
    return (
        <>
            <div className="card" key={id}>
                <Link to={`/item/${id}`}><img src={imgurl}/></Link>
                <h2>{nome}</h2>
                <p>{descricao.length > 120 ? descricao.slice(0, 120) + '...' : descricao}</p>
                <h2>R$ {preco.toFixed(2)}</h2>
                <p>{categoria}</p>
                <div className="botoes">
                    <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button> 
                </div>
            </div>

            <div imagem>

            </div>
        </>
    )

}

export default Item