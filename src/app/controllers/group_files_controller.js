import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroupFile= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"groupfiles",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroupFiles = async (uuid) => {
    try {
        const ref = collection(firestore, "groupfiles")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroupFile= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"groupfiles",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroupFile= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"groupfiles", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroupFile= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"groupfiles", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]