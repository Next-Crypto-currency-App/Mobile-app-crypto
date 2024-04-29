import axios from 'axios'
import React from 'react'
import { onResult, handleError } from '../utils/api'
import { useIonToast } from '@ionic/react'

const useFeed = () => {

    const [toast] = useIonToast()


    function getFeed() {
        return axios.get("/news/get").then((res: any) => {
            return onResult(res, toast, () => {

            })
        }).catch((e) => (handleError(e, toast)))
        return []
    }

    return ({
        getFeed
    }
    )
}

export default useFeed