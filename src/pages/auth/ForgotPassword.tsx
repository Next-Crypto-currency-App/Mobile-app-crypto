import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar, IonBackButton, useIonToast, useIonLoading } from '@ionic/react'
import React, { useState } from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'
import AppButtonText from '../../components/@/AppButtonText'
import { useSelector } from 'react-redux'
import { selectUser, setUserState } from '../../redux/userSlice'
import { SignupResponse, useAuth } from '../../hooks/useAuth'
import { getStorage, setStorage } from '../../utils/storage'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState('')
    const [verifyOTP, setverifyOTP] = useState(false)
    const history = useHistory()
    const { forgotPassword, verifyOTPCode } = useAuth()
    const [toast] = useIonToast()
    const [loader] = useIonLoading()

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)

        if (email) {
            const result = await forgotPassword({
                email,
            })

            if (result.success) {
                toast({ message: "Please check your email", duration: 3000 })
                setverifyOTP(true)
                loader("Please check your email", 5000)
            }
        }
        setLoading(false)
    }

    async function verify(e: any) {
        e.preventDefault();
        setLoading(true)

        if (email) {
            const result = await verifyOTPCode({
                email,
                otp: code
            })

            if (result.success) {
                setStorage("email", email)
                toast({ message: "Please reset Password", duration: 3000 })
                history.replace(authPages.setPassword.url,)
            }
        }
        setLoading(false)
    }



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref={authPages.login.url} />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding space-y-10'>

                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Forgot Password</h2>
                    <div>
                        {verifyOTP ? "Please Check your email and provide code" : "Please enter email address you forgot password for"}
                    </div>
                </div>
                {verifyOTP ? <form onSubmit={verify} className='space-y-1'>
                    <div className='space-y-1 text-center'>
                        <label >OTP Code </label>
                        <IonInput
                            required
                            type='number'
                            value={code} onIonInput={(e) => setCode(e.detail.value as string)}
                            fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                    <div className='space-y-2 pt-3'>
                        <IonButton type="submit" expand='block'>
                            <AppButtonText loading={loading}>Submit</AppButtonText>
                        </IonButton>
                    </div>
                </form> : <form onSubmit={submit} className='space-y-1'>
                    <div className='space-y-1'>
                        <label >Email </label>
                        <IonInput
                            required
                            type='email'
                            value={email} onIonInput={(e) => setEmail(e.detail.value as string)}
                            fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                    <div className='space-y-2 pt-3'>
                        <IonButton type="submit" expand='block'>
                            <AppButtonText loading={loading}>Submit</AppButtonText>
                        </IonButton>
                    </div>
                </form>}


            </IonContent>
        </IonPage>
    )
}

export default ForgotPassword