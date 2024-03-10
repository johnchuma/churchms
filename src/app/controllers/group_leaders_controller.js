import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroupLeader= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"groupleaders",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroupLeaders = async (uuid) => {
    try {
        const ref = collection(firestore, "groupleaders")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroupLeader= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"groupleaders",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroupLeader= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"groupleaders", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroupLeader= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"groupleaders", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]