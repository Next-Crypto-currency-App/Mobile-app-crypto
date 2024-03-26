import { IonButton, IonContent, IonHeader, IonPage } from '@ionic/react'
import React from 'react'
import { authPages } from '../../routes/authRoutes'

const LandingPage = () => {
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent>
                <div className="h-[80vh] justify-center flex items-center flex-col gap-y-9">
                    <img className='w-80' src="/assets/mobile-money.png" alt="" />
                </div>
                <div className='flex flex-col gap-y-4 p-4'>
                    <IonButton routerLink={authPages.login.url}>Login</IonButton>
                    <IonButton color='light' routerLink={authPages.signup.url}>Create Account</IonButton>
                </div>

            </IonContent>
        </IonPage>
    )
}

export default LandingPage