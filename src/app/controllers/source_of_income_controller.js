import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addSourceOfIncome= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"sourceofincomes",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getSourceOfIncomes = async (uuid) => {
    try {
        const ref = collection(firestore, "sourceofincomes")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}

export const getAllSourceOfIncome = async () => {
    try {
        const ref = collection(firestore, "sourceofincomes")
        const qr = query(ref,orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getSourceOfIncome= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"sourceofincomes",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editSourceOfIncome= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"sourceofincomes", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteSourceOfIncome= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"sourceofincomes", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]