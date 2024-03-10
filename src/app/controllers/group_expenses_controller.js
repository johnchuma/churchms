import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroupExpense= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"groupexpenses",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroupExpenses = async (uuid) => {
    try {
        const ref = collection(firestore, "groupexpenses")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroupExpense= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"groupexpenses",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroupExpense= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"groupexpenses", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroupExpense= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"groupexpenses", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]