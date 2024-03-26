import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox } from '@ionic/react'
import React from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import AppProgressHeader from '../../components/@/AppProgressHeader'

const SignupPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <AppProgressHeader value={1} total={3} />
            </IonHeader>
            <IonContent className='ion-padding space-y-10'>

                <form action="" className='space-y-3'>
                    <div>
                        <label >First Name</label>
                        <IonInput fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>
                    <div>
                        <label >Last Name</label>
                        <IonInput fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>
                    <div>
                        <label >Email address</label>
                        <IonInput fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>
                </form>
                <p className='flex gap-x-2 text-sm'>
                    <IonCheckbox slot='start' />
                    <p>
                        I certify that I am 18 years old or older, I agree to the User Agreement, and I have read the Privacy Policy.
                    </p>
                </p>
                <div>
                    <IonButton routerLink={authPages.verifyEmail.url} expand='block'>
                        Create account
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default SignupPage