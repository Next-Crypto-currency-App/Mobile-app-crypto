import { useIonToast } from "@ionic/react";
import axios from "axios";



export interface SignupResponse {
    "success": true,
    "userId": string,
    "secret": string,
    "message": string
}


export function useAuth() {

    const [toast] = useIonToast()

    function createUser(data: {
        name: string;
        username: string;
        email: string;
        password: string;
        suspended: boolean;
    }) {
        // axios request
        return axios.post("/users/create", data).then((res: any) => {
            console.log(res)
            if (res && res.success) {
                localStorage.setItem("auth", JSON.stringify(res))
                localStorage.setItem("email", data.email)
                return res as SignupResponse
            } else {
                toast({ message: res.message || "an unexpected error occured. Please try again later", color: 'danger', duration: 4000 })
            }
        })
            .catch((err) => {
                console.log(err)
                return false;
            })

    }

    function verifyEmail(data: {
        "id": string,
        "email": string,
        "otp": string,
    }) {
        return axios.post("/users/verify_email", data).then((res: any) => {
            console.log(res)
            if (res && res.success) {
                // localStorage.setItem("auth", JSON.stringify(res))
                return res as SignupResponse;
            } else {
                toast({ message: res.message || "Unexpected error occured. please contact support", color: "danger", duration: 4000 })
                false;
            }
        })
            .catch((err) => {
                console.log(err)
                return false;
            })
    }

    function resendOTP(data: {
        "email": string,
    }) {

        return axios.post("/users/resend_otp", data).then((res: any) => {
            console.log(res, "resend otp")
            if (res && res.success) {
                toast({ message: "Verification code has been resent", duration: 4000 })
                return res as SignupResponse;
            } else {
                toast({ message: res.message || "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
                false;
            }
        })
            .catch((err) => {
                console.log(err)
                toast({ message: "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
                return false;
            })
    }

    function login(data: {
        "email": string,
        password: string
    }) {
        console.log({ data });

        return axios.post("/users/login", data).then((res: any) => {
            if (res && res.success) {
                return res as { success: boolean, username: string, email: string };
            } else {
                console.log(res)
                toast({ message: res.message || "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
                false;
            }
        })
            .catch((err) => {
                console.log(err)
                toast({ message: "Unexpected error occured. please contact support", color: 'danger', duration: 4000 })
                return false;
            })
    }

    return { createUser, verifyEmail, resendOTP, login }
}