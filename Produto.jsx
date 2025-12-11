import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function Produto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [quantidade, setQuantidade] = useState('');

  async function cadastrar() {
    try {
      const produtoData = {
        nome,
        preco: Number(preco),
        descricao,
        quantidade: Number(quantidade)
      };

      const docRef = await addDoc(collection(db, "produtos"), produtoData);
      console.log("Produto cadastrado com sucesso! ID:", docRef.id);

      // Resetar os campos (opcional)
      setNome('');
      setPreco('');
      setDescricao('');
      setQuantidade('');
    } catch (error) {
      console.error("Erro ao cadastrar produto: ", error);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cadastro de Produto</h1>
      <label>Nome do produto</label><br />
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br /><br />

      <label>Quantidade em estoque</label><br />
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <br /><br />

      <label>Preço do produto</label><br />
      <input
        type="number"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <br /><br />

      <label>Descrição</label><br />
      <input
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <br /><br />

      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Produto;
