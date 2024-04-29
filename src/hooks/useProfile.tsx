import { useIonToast } from "@ionic/react";
import axios from "axios";
import { handleError, onResult } from "../utils/api";


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
            return onResult(res, toast, () => {
                toast({ message: "Pin has been added", duration: 4000, color: 'success' })
            });

        }).catch((e) => (handleError(e, toast)))
    }


    return { setPin }
}