import { useState } from "react";
import Produto from "../components/Produto";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
const Catalogo = () => {
    const [url, setUrl] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [produtos, setProdutos] = useState([])

    const handleURLChange = (e) => {
        setUrl(e.target.value)
    }
    const handleNomeChange = (e) => {
        setNome(e.target.value)
    }

    const handleDescricaoChange = (e) => {
        setDescricao(e.target.value)
    }

    const handlePrecoChange = (e) => {
        setPreco(e.target.value)
    }

    const handleFormReset = () => {
        setUrl('')
        setNome('')
        setDescricao('')
        setPreco(0)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let produto = {
            url,
            nome,
            descricao,
            preco: Number(preco),
        }
        setProdutos([...produtos, produto])
        handleFormReset()
    }



    return (
        <>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <label>URL da imagem: </label>
                <input value={url} onChange={handleURLChange} type='url' />
                <p />
                <label>Nome do produto:</label>
                <input value={nome} onChange={handleNomeChange} type='text' />
                <p />
                <label>Descrição:</label>
                <input value={descricao} onChange={handleDescricaoChange} type='text' />
                <p />
                <label>Preço: </label>
                <input value={preco} onChange={handlePrecoChange} type='number' />

                <p />
                <button type='submit'>Incluir Produto</button>
                <button type='reset'>Limpar Formulário</button>
            </form>

            <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                padding: '10px',
                gap: '50px',
                justifyContent: 'center'

            }}>
                 {produtos.map((produto) => (
                        <Produto
                            key={produto.id}
                            url={produto.url}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                        />
                ))}

            </div>

        </>
    )

}

export default Catalogo