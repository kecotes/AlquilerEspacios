import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { doc, addDoc, deleteDoc, setDoc, collection, getDocs, getDoc } from "firebase/firestore"
import db from '@/db'

const colection = 'posts'

export default {
  all: () => getDocs(collection(db, colection)),
  find: async id => {
    const docSnap = await getDoc(doc(db, colection, id))
    return docSnap.exists() ? docSnap.data() : null
  },
  create: post => addDoc(collection(db, colection), post),
  update: (id, post) => setDoc(doc(db, colection, id), post),
  delete: async id => await deleteDoc(doc(db, colection, id))
}

/* export const createPost = (post) => {
    post => addDoc(collection(db, colection), post)
} */