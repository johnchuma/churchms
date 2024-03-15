import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addScripture= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"scriptures",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getScriptures = async () => {
    try {
        const ref = collection(firestore, "scriptures")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getScripture= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"scriptures",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editScripture= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"scriptures", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteScripture= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"scriptures", id))
        return response;
    } catch (error) {
        throw error
    }
}
