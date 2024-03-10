import { Timestamp, collection, addDoc, deleteDoc, doc, getDocs, setDoc, updateDoc, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore } from "../utils/firebase"
import {generateId} from "../utils/id_generator"

export const addGroupCalender= async (data) => {
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"groupcalenders",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getGroupCalenders = async (uuid) => {
    try {
        const ref = collection(firestore, "groupcalenders")
        const qr = query(ref,where('groupId','==',uuid),orderBy("createdAt",'desc'))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        throw error

    }
}
export const getGroupCalender= async (id) => {
    try {
        const response = await getDoc(doc(firestore,"groupcalenders",id))
        return response.data();
    } catch (error) {
        throw error
    }
}
export const editGroupCalender= async ( id, data ) => {
    try {
        const response = await updateDoc(doc(firestore,"groupcalenders", id), data)
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteGroupCalender= async ( id ) => {[]
    try {
       
        const response = await deleteDoc(doc(firestore,"groupcalenders", id))
        return response;
    } catch (error) {
        throw error
    }
}
[]