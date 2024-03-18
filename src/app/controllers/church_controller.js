import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addChurch= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"churchs",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return id;
    } catch (error) {
        throw error
    }
}

export const getChurchs = async () => {
    try {
        const ref = collection(firestore, "churchs")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getChurch= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"churchs",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editChurch= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"churchs", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteChurch= async ( id ) => {
    try {
       
        const response = await deleteDoc(doc(firestore,"churchs", id))
        return response;
    } catch (error) {
        throw error
    }
}
