import '../css/itens.css'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
const Itens = ({ id, imgurl, nome, descricao, preco, onComprarClick, onLikeClick, onDeslikeClick }) => {
    return (
        <>
            <div className='cardItem'>
                <div className='imagem'>
                    <img src={imgurl} />
                </div>
                <div className='infos'>
                    <h2>{nome}</h2>
                    <h4>{descricao}</h4>
                    <h2>R$ {Number(preco).toFixed(2)}</h2>
                    <div className="botoes">
                        <button className='botao' onClick={() => { onComprarClick(id) }}>Comprar</button>
                        <button className='botao' onClick={() => { onLikeClick(id) }}><SlLike /></button>
                        <button className='botao' onClick={() => { onDeslikeClick(id) }}><SlDislike /></button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Itens