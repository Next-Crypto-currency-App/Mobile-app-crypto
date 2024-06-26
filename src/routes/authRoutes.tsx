import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { shirtOutline, ellipse, square } from 'ionicons/icons'
import React from 'react'
import { Route, Redirect } from 'react-router'
import NewPage from '../pages/NewPage'
import LoginPage from '../pages/auth/LoginPage'
import LandingPage from '../pages/auth/LandingPage'
import VerifyEmailPage from '../pages/auth/VerifyEmailPage'
import SignupPage from '../pages/auth/SignupPage'
import SetPasswordPage from '../pages/auth/SetPasswordPage'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Verify2FA from '../pages/auth/Verify2FA'




const AuthRoutes = () => {
    return (
        <IonRouterOutlet >
            {
                (Object.values(authPages) as unknown as { name: string, url: string, page: () => JSX.Element }[]).map((route, index) => {
                    return (<Route key={index} exact path={route.url} component={route.page} />)
                })
            }
        </IonRouterOutlet>

    )
}

export default AuthRoutes

export const authPages = {
    landing: {
        name: "Landing",
        url: "/",
        page: LandingPage
    },
    login: {
        name: "Login",
        url: "/login",
        page: LoginPage
    },
    signup: {
        name: "Signup",
        url: "/signup",
        page: SignupPage
    },
    verifyEmail: {
        name: "verify",
        url: "/verify-email",
        page: VerifyEmailPage
    },
    setPassword: {
        name: "set-password",
        url: "/set-password",
        page: SetPasswordPage
    },
    forgotPassword: {
        name: "forgot-password",
        url: "/forgot-password",
        page: ForgotPassword
    },
    verify2FA: {
        name: "verify-2fa",
        url: "/verify-2fa",
        page: Verify2FA
    },

}