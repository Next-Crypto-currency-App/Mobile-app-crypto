

import React from 'react'
import { storage, } from '../config/firebase'
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { handleError } from '../utils/api'
import { useIonToast } from '@ionic/react'

const useFirebaseStorage = () => {
    const [toast] = useIonToast()

    async function uploadPhoto({ name, base64Image, type }: { name: string, base64Image: string, type: string }) {
        try {

            const blob = await fetch(base64Image).then(result => result.blob());
            const reference = ref(storage, `users/kyc/${name}/${type}`);
            if (blob) {
                return uploadBytes(reference, blob).then((response) => {
                    return getDownloadURL(response.ref).then(url => {
                        return url;
                    })
                })
            }
            return undefined
        } catch (err) {
            handleError(err, toast)
        }


    }
    return {
        uploadPhoto
    }
}

export default useFirebaseStorage