import { useIonToast } from "@ionic/react";
import axios from "axios";
import { handleError, onResult } from "../utils/api";


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

        console.log(data, ">>>>>>>> Request");
        // axios request
        return axios.post("/users/create", data).then((res: any) => {
            return onResult(res, toast, () => {
                localStorage.setItem("auth", JSON.stringify(res))
                localStorage.setItem("email", data.email)
            });
        }).catch((e) => (handleError(e, toast)))

    }

    function verifyEmail(data: {
        "id": string,
        "email": string,
        "otp": string,
    }) {
        return axios.post("/users/verify_email", data).then((res: any) => {
            return onResult(res, toast)

        }).catch((e) => (handleError(e, toast)))
    }

    function resendOTP(data: {
        "email": string,
    }) {

        return axios.post("/users/resend_otp", data).then((res: any) => {
            return onResult(res, toast)
        }).catch((e) => (handleError(e, toast)))
    }

    function login(data: {
        "email": string,
        password: string
    }) {

        return axios.post("/users/login", data).then((res: any) => {
            return onResult(res, toast)
        }).catch((e) => (handleError(e, toast)))
    }

    async function forgotPassword(data: {
        "email": string,
    }) {
        return axios.post("/users/forgot_password", data).then((res: any) => {
            return onResult(res, toast);
        }).catch((e) => (handleError(e, toast)))


    }

    async function verifyOTPCode(data: {
        "email": string,
        "otp": string
    }) {
        return axios.post("/users/verify_otp", data).then((res: any) => {
            return onResult(res, toast);
        }).catch((e) => (handleError(e, toast)))
    }

    async function resetPassword(data: {
        "email": string,
        "password": string
    }) {
        return axios.post("/users/reset_password", data).then((res: any) => {
            return onResult(res, toast, () => {
                toast({ message: "Password Reset Successfull", duration: 4000, color: "success" })
            });
        }).catch((e) => (handleError(e, toast)))
    }
    async function logout() {
        return axios.get("/users/logout").then((res: any) => {
            return onResult(res, toast);

        }).catch((e) => (handleError(e, toast)))
    }

    async function verify2FAToken(data: { token: string, email: string }) {
        return axios.post("/users/verify_2fa", data).then((res: any) => {
            return onResult(res, toast);
        }).catch((e) => (handleError(e, toast)))
    }


    return { createUser, verifyOTPCode, verifyEmail, resetPassword, resendOTP, login, forgotPassword, logout, verify2FAToken }
}