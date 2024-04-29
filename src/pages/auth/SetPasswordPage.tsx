import { IonPage, IonHeader, IonContent, IonButtons, IonButton, IonIcon, IonProgressBar, IonInput, IonCheckbox, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { authPages } from '../../routes/authRoutes'
import { close } from 'ionicons/icons'
import { Link, useHistory } from 'react-router-dom'
import AppProgressHeader from '../../components/@/AppProgressHeader'
import AppPasswordInput from '../../components/@/AppPasswordInput'
import AppButtonText from '../../components/@/AppButtonText'
import { useAuth } from '../../hooks/useAuth'
import { getStorage } from '../../utils/storage'

const SetPasswordPage = () => {

    const [newPassword, setNewPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth();
    const history = useHistory()
    
    async function reset(e: any) {
        e.preventDefault();
        const email = getStorage("email")

        setLoading(true)
        const result = await resetPassword({
            email,
            password: newPassword
        })

        if (result) {
            console.log(result);
            history.replace({ pathname: authPages.login.url })
        }

        setLoading(false)
    }

    return (
        <IonPage>
            <AppProgressHeader backURL={authPages.forgotPassword.url} value={3} total={3} />
            <IonContent className='ion-padding '>
                <form onSubmit={reset} className='space-y-10'>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>Password Reset</h2>
                        <div>
                            Set a strong password for your account.
                        </div>
                    </div>
                    <form action="" className='space-y-4'>
                        <div className='space-y-1'>
                            <label >New Password</label>
                            <AppPasswordInput value={newPassword} onChange={(result) => setNewPassword(result as string)} />
                        </div>
                    </form>

                    <div className='space-y-2 mt-5'>
                        <IonButton type='submit' expand='block'>
                            <AppButtonText loading={loading}>Submit</AppButtonText>
                        </IonButton>
                        {/* <IonButton fill='clear'> <div>Didn’t receive the code?</div></IonButton> */}
                    </div>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default SetPasswordPage