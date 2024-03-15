import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addProject = async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"projects",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getProjects = async () => {
    try {
        const ref = collection(firestore, "projects")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getProject= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"projects",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editProject= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"projects", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteProject= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"projects", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]