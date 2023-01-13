import { db } from "./firebaseConnection";
import { doc, setDoc, collection, addDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
import './app.css'

function App() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function handleAdd(){
    /*
    // --------INJETANDO ID ----------------------

    await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log('Dados registrados no banco')
    })
    .catch((error) => {
      console.log('Gerou erro ' + error)
    })
    */

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log('Cadastrado com sucesso')
      setAutor('')
      setTitulo('')
    })
    .catch((erro) => {
      console.log('Erro ' + erro)
    })
  }

  async function buscarPost(){
    
    const postRef = doc(db, "posts", "12345")

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch(() => {
      console.log('Erro ao buscar')
    })

  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className="container">

        <label>Título:</label>
        <textarea
          type='text'
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input 
          type='text' 
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar Post</button>

      </div>

    </div>
  );
}

export default App;
