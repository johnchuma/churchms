import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroupTask= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"grouptasks",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroupTasks = async (uuid) => {
    try {
        const ref = collection(firestore, "grouptasks")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroupTask= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"grouptasks",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroupTask= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"grouptasks", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroupTask= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"grouptasks", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]