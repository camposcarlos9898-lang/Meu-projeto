import {
    collection,
    addDoc,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

import { db } from "../lib/firebase";

const colecao = collection(db,"hobbies");

export async function criarHobby(nome)
{
    await addDoc(colecao, {
        nome,
        praticado: false
    });
}

export function ouvirHobbies(aoMudar) {
    return onSnapshot(colecao,
        (resultado) => {
            const lista =
        resultado.docs.map((d) => ({
            id: d.id,
            ...d.data()
            }));

            aoMudar(lista);
    });
    
}

export async function alternarHobby(id,praticado) {
    await updateDoc(doc(db, "hobbies",id), {
        praticado: !praticado
    });
}

export async function removerHobby(id)
{
    await deleteDoc(doc(db, "hobbies",
id));
}