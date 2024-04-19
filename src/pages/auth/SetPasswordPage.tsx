import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'

const SetPasswordPage = () => {
    return (
        <IonPage>
            <AppProgressHeader value={3} total={3} />
            <IonContent className='ion-padding space-y-10'>

                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Password Reset</h2>
                    <div>
                        Set a strong password for your account.
                    </div>
                </div>
                <form action="" className='space-y-1'>
                    <div className='space-y-1'>
                        <label >Password</label>
                        <IonInput type='password' fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                </form>

                <div className='space-y-2'>
                    <IonButton expand='block'>
                        Next
                    </IonButton>
                    {/* <IonButton fill='clear'> <div>Didn’t receive the code?</div></IonButton> */}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default SetPasswordPage