import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addIncomeCollection= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"incomecollections",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getIncomeCollections = async (uuid) => {
    try {
        const ref = collection(firestore, "incomecollections")
        const qr = query(ref,where('incomeSourceId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getIncomeCollection= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"incomecollections",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editIncomeCollection= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"incomecollections", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteIncomeCollection= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"incomecollections", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]