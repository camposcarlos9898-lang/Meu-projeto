import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function salvarCep(dados)
{
    await addDoc(collection(db,"ceps"), {
        ...dados,
        criadaEm: serverTimestamp()
    });
}