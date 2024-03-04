import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
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
        return response;
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
        return response.data();
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