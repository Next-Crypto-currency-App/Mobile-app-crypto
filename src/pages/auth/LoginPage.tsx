import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonProgressBar, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import AuthRoutes, { authPages } from '../../routes/authRoutes'
import { close, eyeOff, eyeOutline } from 'ionicons/icons'
import AppPasswordInput from '../../components/@/AppPasswordInput'
import { useDispatch } from 'react-redux'
import { setUserState } from '../../redux/userSlice'
import AppButtonText from '../../components/@/AppButtonText'
import { useAuth } from '../../hooks/useAuth'

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { login } = useAuth()


    async function submit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        const result = await login({ email, password }) as { success: boolean, username: string, email: string }
        setLoading(false)

        if (result.success) {
            dispatch(setUserState({
                username: result.username,
                email: result.email
            }));
            location.href = "/"
            setTimeout(() => {
                location.reload()
            }, 1000);
        }


    }

    return (
        <IonPage>

            <IonContent className='ion-padding space-y-10'>
                <div>

                    <h2 className='font-bold text-xl'>Login</h2>
                </div>
                <form onSubmit={submit} className='space-y-3'>
                    <div>
                        <label >Email</label>
                        <IonInput required onIonInput={(e) => setEmail(e.detail.value as string)} onIonChange={(e) => setEmail(e.detail.value as string)} value={email} type='email' fill='outline' className='border rounded-md ion-padding-horizontal' />
                    </div>

                    <div>
                        <label >Password</label>
                        <div >
                            <AppPasswordInput value={password} onChange={(val) => setPassword(val)} />
                        </div>
                    </div>
                    <div className='pt-10 space-y-2'>
                        <IonButton type='submit' disabled={loading} onClick={() => { }} expand='block'>
                            <AppButtonText loading={loading}>Login</AppButtonText>
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