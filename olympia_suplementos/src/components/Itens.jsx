const Itens = ({ id, imgurl, nome, descricao, preco, onComprarClick}) => {
    return (
        <>
            <div className="card" key={id}>
                <h2>{nome}</h2>
                <img src={imgurl}/>
                <p>{descricao}</p>
                <h2>R$ {preco}</h2>
                <div className="botoes">
                    <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button> 
                </div>
            </div>

            <div imagem>

            </div>
        </>
    )

}

export default Itens