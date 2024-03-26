import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonProgressBar, IonToolbar } from '@ionic/react'
import React from 'react'
import AuthRoutes, { authPages } from '../../routes/authRoutes'
import { close, eyeOff, eyeOutline } from 'ionicons/icons'

const LoginPage = () => {
    return (
        <IonPage>
            <IonToolbar color={'none'}>

            </IonToolbar>
            <IonContent className='ion-padding space-y-10'>
                <div>

                    <h2 className='font-bold text-xl'>Login</h2>
                </div>
                <form action="" className='space-y-3'>
                    <div>
                        <label >Email</label>
                        <IonInput fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                    <div>
                        <label >Password</label>
                        <div className='border rounded-md flex pl-4'>
                            <IonInput fill='outline' className='  ' />
                            <IonButton fill='clear' size='small'>
                                <IonIcon icon={eyeOutline} />
                            </IonButton>
                        </div>
                    </div>
                </form>

                <div>
                    <IonButton routerLink={authPages.signup.url} expand='block'>
                        Login
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default LoginPage