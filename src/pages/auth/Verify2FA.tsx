
import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link, useHistory, useLocation } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'
import AppButtonText from '../../components/@/AppButtonText'
import { useSelector } from 'react-redux'
import { selectUser, setUserState } from '../../redux/userSlice'
import { SignupResponse, useAuth } from '../../hooks/useAuth'
import { getStorage } from '../../utils/storage'
import PageLayout from '../../components/Layout/PageLayout'
import { useDispatch } from 'react-redux'

const Verify2FA = () => {
    const [code, setcode] = useState('')
    const [loading, setLoading] = useState(false)
    const email = useLocation().state as { email: string } | undefined;
    const { verify2FAToken } = useAuth();
    const [lastResend] = useState(0);
    const [count, setCount] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch()

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)

        if (email) {
            const result = await verify2FAToken({
                email: email.email,
                token: code
            }) as { success: boolean, username: string, email: string, accessToken: string, accountComplete: boolean, fa_auth: boolean, id: string };
            if (result) {

                dispatch(setUserState({
                    accessToken: result.accessToken,
                    username: result.username,
                    email: result.email,
                    accountComplete: result.accountComplete,
                    fa_auth: result.fa_auth,
                    id: result.id
                }));

                location.href = "/"
                setTimeout(() => {
                    location.reload()
                }, 1000);

            }
        } else {
            history.goBack();
        }
        setLoading(false);
    }



    return (
        <PageLayout title='2FA Authentication' backLink='/'>
            <section>
                <div className='text-center mb-4'>
                    <h2 className='font-bold text-xl'>Enter Code</h2>
                    <div>
                        Please enter the 6-digit verification code from authenticator app
                    </div>
                </div>

                <form onSubmit={submit} className='space-y-1'>
                    <div className='space-y-1'>
                        {/* <label >6 digit code</label> */}
                        <IonInput
                            required
                            value={code} maxlength={6} onIonInput={(e) => setcode(e.detail.value as string)}
                            fill='outline' className='border rounded-md ion-padding-horizontal text-center' />
                    </div>
                    <div className='space-y-2 pt-3'>
                        <IonButton type="submit" expand='block'>
                            <AppButtonText loading={loading}>Submit</AppButtonText>
                        </IonButton>
                    </div>
                </form>
            </section>
        </PageLayout>
    )
}

export default Verify2FA

