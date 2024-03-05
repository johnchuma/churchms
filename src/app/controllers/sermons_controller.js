import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addSermon= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"sermons",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getSermons = async () => {
    try {
        const ref = collection(firestore, "sermons")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getSermon= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"sermons",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editSermon= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"sermons", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteSermon= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"sermons", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]