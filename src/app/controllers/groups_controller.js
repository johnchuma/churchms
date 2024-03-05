import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroup= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"groups",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroups = async () => {
    try {
        const ref = collection(firestore, "groups")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroup= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"groups",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroup= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"groups", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroup= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"groups", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]