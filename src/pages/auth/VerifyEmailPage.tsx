import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'
import AppButtonText from '../../components/@/AppButtonText'
import { useSelector } from 'react-redux'
import { selectUser, setUserState } from '../../redux/userSlice'

const VerifyEmailPage = () => {
    const [code, setcode] = useState('')
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectUser)


    function submit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)


        setTimeout(() => {
            location.href = "/"
            setLoading(false)
        }, 4000);
    }

    return (
        <IonPage>
            <AppProgressHeader value={2} total={3} />

            <IonContent className='ion-padding space-y-10'>

                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Create your Account</h2>
                    <p>
                        Please enter the 6-digit verification code that was sent to <b>{user.email}</b>.
                        The code is valid for 30 minutes.
                    </p>
                </div>
                <form onSubmit={submit} className='space-y-1'>
                    <div className='space-y-1'>
                        <label >Email verification code</label>
                        <IonInput
                            required
                            value={code} onIonInput={(e) => setcode(e.detail.value as string)}
                            fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>
                    <div className='flex justify-end'>
                        <IonButton slot='end' size='small' fill='clear'>Resend Code</IonButton>
                    </div>
                    <div className='space-y-2 pt-3'>
                        <IonButton type="submit" expand='block'>
                            <AppButtonText loading={loading}>Submit</AppButtonText>
                        </IonButton>
                    </div>
                </form>


            </IonContent>
        </IonPage>
    )
}

export default VerifyEmailPage