import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'
import AppButtonText from '../../components/@/AppButtonText'
import { useSelector } from 'react-redux'
import { selectUser, setUserState } from '../../redux/userSlice'
import { SignupResponse, useAuth } from '../../hooks/useAuth'
import { getStorage } from '../../utils/storage'

const VerifyEmailPage = () => {
    const [code, setcode] = useState('')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState(getStorage("email") || "")
    const { verifyEmail, resendOTP } = useAuth()
    const [lastResend, setLastResend] = useState(0)
    const history = useHistory()

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)
        const auth = getStorage("auth")
        const authInfo = auth as SignupResponse;
        console.log(authInfo, "authInfo")

        if (auth) {
            await verifyEmail({
                id: authInfo.userId,
                email,
                otp: code
            })
            history.push(authPages.login.url);
        } else {
            history.goBack();
        }
        setLoading(false)
    }
    async function resend(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)

        if (email) {
            const result = await resendOTP({
                email
            }) as SignupResponse
            if (result) {
                setLastResend(Date.now())
            }
        } else {
            history.goBack()
        }
        setLoading(false)
    }

    return (
        <IonPage>
            <AppProgressHeader value={2} total={2} />

            <IonContent className='ion-padding space-y-10'>

                <div className='text-center'>
                    <h2 className='font-bold text-xl'>Create your Account</h2>
                    <div>
                        Please enter the 6-digit verification code that was sent to <b>{email}</b>.
                        The code is valid for 30 minutes.
                    </div>
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
                        <IonButton disabled={Math.abs(lastResend - Date.now()) < 60000 || false} onClick={resend} slot='end' size='small' fill='clear'>Resend Code</IonButton>
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