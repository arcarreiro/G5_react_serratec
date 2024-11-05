import { useState } from "react";
import Produto from "../components/Produto";
import Stack from '@mui/material/Stack';
const Catalogo = () => {
    const [url, setUrl] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [produtos, setProdutos] = useState([])

    const handleURLChange = (e) => {
        setUrlImagem(e.target.value)
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
        setNome('')
        setUrlImagem('')
        setPreco(0)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let produto = {
            nome,
            urlImagem,
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
            <Stack direction='row' spacing={2}>
                {produtos.length > 0 ?
                    produtos.map((produto, index) => (
                        <Produto
                            key={index}
                            url={produto.url}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            index={index}
                        />
                    )) : <h2>Não há produto cadastrado</h2>}
            </Stack>

        </>
    )

}

export default Catalogo