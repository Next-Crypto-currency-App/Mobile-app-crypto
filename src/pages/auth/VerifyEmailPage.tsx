import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'

const VerifyEmailPage = () => {
    return (
        <IonPage>
            <AppProgressHeader value={2} total={3} />

            <IonContent className='ion-padding space-y-10'>

                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Create your Account</h2>
                    <p>
                        Please enter the 6-digit verification code that was sent to ono@gmail.com.
                        The code is valid for 30 minutes.
                    </p>
                </div>
                <form action="" className='space-y-1'>
                    <div className='space-y-1'>
                        <label >Email verification code</label>
                        <IonInput fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>
                    <div className='flex justify-end'>
                        <IonButton slot='end' fill='clear'>Get Code</IonButton>
                    </div>

                </form>

                <div className='space-y-2'>
                    <IonButton routerLink={authPages.setPassword.url} expand='block'>
                        Submit
                    </IonButton>
                    <IonButton fill='clear'> <div>Didn’t receive the code?</div></IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default VerifyEmailPage