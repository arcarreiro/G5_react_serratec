import { useState } from "react";
import Produto from "../components/Produto";
import Grid from '@mui/material/Grid2';
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

            <Grid container spacing={10}>
                {produtos.map((produto, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Produto
                            url={produto.url}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                            index={index}
                        />
                    </Grid>
                ))}
            </Grid>


        </>
    )

}

export default Catalogo