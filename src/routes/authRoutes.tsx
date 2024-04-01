import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { shirtOutline, ellipse, square } from 'ionicons/icons'
import React from 'react'
import { Route, Redirect } from 'react-router'
import NewPage from '../pages/NewPage'
import Tab1 from '../pages/Tab1'
import Tab2 from '../pages/Tab2'
import Tab3 from '../pages/Tab3'
import LoginPage from '../pages/auth/LoginPage'
import LandingPage from '../pages/auth/LandingPage'
import VerifyEmailPage from '../pages/auth/VerifyEmailPage'
import SignupPage from '../pages/auth/SignupPage'
import SetPasswordPage from '../pages/auth/SetPasswordPage'




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

}