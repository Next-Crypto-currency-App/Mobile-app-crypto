import { useIonToast } from "@ionic/react";
import axios from "axios";
import { handleError, onResult } from "../utils/api";
import { KYCResponse } from "../interfaces/profile";


export interface SignupResponse {
    "success": true,
    "userId": string,
    "secret": string,
    "message": string
}


export function useProfile() {

    const [toast] = useIonToast()

    async function setPin({ code }: { code: string }) {

        return axios.post("/users/set_pin", { pin: code }).then((res: any) => {
            return onResult(res, toast, "Pin has been added");

        }).catch((e) => (handleError(e, toast)))
    }

    async function submitKYC(data: {
        "status": string,
        "docType": string,
        "selfie": string,
        "document": string[],
        "userId": string
    }) {

        return axios.post("/users/kyc", data).then((res: any) => {
            console.log(res, "RESULT");
            return onResult(res, toast, "KYC Documents submitted");
        }).catch((e) => (handleError(e, toast)))

    }

    async function getKYCInfo() {

        return axios.get("/users/kyc").then((res: any) => {
            console.log(res, "RESULT");
            return onResult(res, toast) as { kyc: KYCResponse, success: boolean } | undefined;
        }).catch((e) => (handleError(e, toast)))

    }

    async function get2FAData() {

        return axios.get("/users/get_2fa").then((res: any) => {
            console.log(res, "RESULT");
            return onResult(res, toast) as { kyc: KYCResponse, success: boolean } | undefined;
        }).catch((e) => (handleError(e, toast)))

    }

    async function set2FAData(data: { secret: string, token: string }) {

        return axios.post("/users/set_2fa", data).then((res: any) => {
            return onResult(res, toast) as { kyc: KYCResponse, success: boolean } | undefined;
        }).catch((e) => (handleError(e, toast)));
    }


    return { setPin, submitKYC, getKYCInfo, get2FAData, set2FAData }
}