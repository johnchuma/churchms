import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "./firebase"

export const getLink = async(file)=>{
    try {
  const reference = ref(storage,`images/${file.name}`)
  await uploadBytes(reference,file)  
  const link = await getDownloadURL(reference)
  return link;
    } catch (error) {
        throw error
    }
  
}