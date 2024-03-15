import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addAnnouncement= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"announcements",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getAnnouncements = async () => {
    try {
        const ref = collection(firestore, "announcements")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getAnnouncement= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"announcements",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editAnnouncement= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"announcements", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteAnnouncement= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"announcements", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]