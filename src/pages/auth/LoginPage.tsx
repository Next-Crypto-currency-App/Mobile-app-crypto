import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonProgressBar, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import AuthRoutes, { authPages } from '../../routes/authRoutes'
import { close, eyeOff, eyeOutline } from 'ionicons/icons'
import AppPasswordInput from '../../components/@/AppPasswordInput'

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <IonPage>

            <IonContent className='ion-padding space-y-10'>
                <div>

                    <h2 className='font-bold text-xl'>Login</h2>
                </div>
                <form action="" className='space-y-3'>
                    <div>
                        <label >Email</label>
                        <IonInput required onIonChange={(e) => setEmail(e.detail.value as string)} value={email} type='email' fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                    <div>
                        <label >Password</label>
                        <div >
                            <AppPasswordInput value={password} onChange={(val) => setPassword(val)} />
                        </div>
                    </div>
                    <div className='pt-10 space-y-2'>
                        <IonButton onClick={() => { }} expand='block'>
                            Login
                        </IonButton>
                        <IonButton fill='clear' routerLink={authPages.signup.url} expand='block'>
                            Create Account Instead
                        </IonButton>
                    </div>
                </form>


            </IonContent>
        </IonPage>
    )
}

export default LoginPage