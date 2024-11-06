import '../css/itens.css'
const Itens = ({ id, imgurl, nome, descricao, preco, onComprarClick }) => {
    return (
        <>
            <div className='cardItem' style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '10px',
                gap: '50px',
                justifyContent: 'center',
                margin: '2rem'
            }}>
                <div className='imagem'>
                    <img src={imgurl} />
                </div>
                <div className='infos'>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <h2>R$ {preco}</h2>
                    <div className="botoes">
                        <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Itens