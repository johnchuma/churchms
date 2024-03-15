import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addBlog= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"blogs",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getBlogs = async () => {
    try {
        const ref = collection(firestore, "blogs")
        const response = await getDocs(ref)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getBlog= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"blogs",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editBlog= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"blogs", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteBlog= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"blogs", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]