import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addMember= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"members",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return id;
    } catch (error) {
        throw error
    }
}

export const getMembers = async () => {
    try {
        const ref = collection(firestore, "members")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getMember= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"members",id))
        return response.exists?response.data():null;
    } catch (error) {
        throw error
    }
}
export const findMember= async (id) => {
    try {
        const ref = collection(firestore, "members")
        const qr = query(ref,where('email','==',id))
        const response = await getDocs(qr)
        return response.docs.length >0?response.docs[0].data():null;
    } catch (error) {
        throw error
    }
}
export const editMember= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"members", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteMember= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"members", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]