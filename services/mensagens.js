import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const colecao = collection(db,"mensagens");

export async function
salvarMensagem(nome, email, mensagem) {
    await addDoc(colecao, {
        nome,
        email,
        mensagem,
        criadaEm: serverTimestamp()
    });    
}