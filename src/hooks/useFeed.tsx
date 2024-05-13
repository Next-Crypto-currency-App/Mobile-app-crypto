import axios from 'axios'
import React from 'react'
import { onResult, handleError } from '../utils/api'
import { useIonToast } from '@ionic/react'


export interface INews {
    title: string,
    description: string,
    id?: string;
    image?: string;
    likes: {
        "id": string,
        "newsId": string,
        "userId": string,
        "createdAt": string
    }[]
    comments: {
        "id": string,
        "newsId": string,
        "userId": string,
        "createdAt": string,
        "comment": string,
        "username": string
    }[]


}

const useFeed = () => {

    const [toast] = useIonToast()


    async function getFeed() {
        return axios.get("/news/get").then((res: any) => {
            return res
        }).catch((e) => (handleError(e, toast)))

    }
    async function likeFeed(data: {
        "newsId": string,
        "userId": string
    }) {
        return axios.post("/news/like", data).then((res: any) => {
            return res
        }).catch((e) => (handleError(e, toast)))

    }

    async function unlikeFeed(id: string) {
        return axios.get(`/news/un_like/${id}`).then((res: any) => {
            return res
        }).catch((e) => (handleError(e, toast)))

    }

    async function getPostById(id: string) {
        return axios.get(`/news/get/${id}`).then((res: any) => {
            return res as INews
        }).catch((e) => (handleError(e, toast)))

    }

    async function addFeedComment(data: {
        "newsId": string,
        "comment": string
    }) {
        return axios.post(`/news/comment`, { ...data, userId: "sdjs" }).then((res: any) => {
            return res as INews
        }).catch((e) => (handleError(e, toast)))

    }
    async function deleteFeedComment(id: string, //comment Id
    ) {
        return axios.delete(`/news/comment/${id}`).then((res: any) => {
            return res as INews
        }).catch((e) => (handleError(e, toast)));

    }



    return ({
        getFeed,
        likeFeed,
        getPostById,
        unlikeFeed,
        addFeedComment,
        deleteFeedComment
    }
    )
}

export default useFeed