import { IonBackButton, IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonInput, IonLabel, IonLoading, IonPage, IonSkeletonText, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { mainPages } from '../../routes/mainRoutes'
import { chevronBack, chevronForward, copyOutline } from 'ionicons/icons'
import { useProfile } from '../../hooks/useProfile'
import PageLayout from '../../components/Layout/PageLayout'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

const TwoFA = () => {
    const [code, setcode] = useState("")
    const { get2FAData, set2FAData } = useProfile()
    const [loading, setLoading] = useState(false)
    const [secret, setSecret] = useState("")
    const [qrCode, setQrCode] = useState("")
    const user = useSelector(selectUser)
    const [page, setPage] = useState<0 | 1 | 2>(user.fa_auth ? 0 : 1)


    useEffect(() => {
        get2FA()
    }, [])

    async function get2FA(event?: CustomEvent<RefresherEventDetail>) {

        setLoading(true)

        const result = await get2FAData() as { data: { qrcode: string, secret: string } } | undefined;

        if (result) {
            setQrCode(result.data.qrcode)
            setSecret(result.data.secret)
        }

        setLoading(false)
        if (event) {
            event.detail.complete()
        }
    }

    async function set2FA(e: any) {

        e.preventDefault();

        setLoading(true);

        const result = await set2FAData({ secret, token: code });
        console.log("RESULTS", result)

        if (result) {
            setPage(0)
        }

        setLoading(false)

    }

    return (
        <PageLayout title='2FA Verify' onRefresh={get2FA}>

            <div className="h-[70vh] flex flex-col items-center justify-center">
                <IonLoading isOpen={loading} message={"Please Wait"} onDidDismiss={() => setLoading(false)} duration={15000}></IonLoading>
                {
                    // loading && <div>
                    //     <IonSkeletonText className='h-[30vh] w-full rounded mb-4'></IonSkeletonText>
                    //     <IonSkeletonText className='h-[10px] w-full rounded'></IonSkeletonText>
                    // </div>

                }
                {page == 0 && <div>
                    <img src="/assets/security_boy.png" alt="" />
                    <h2 className='text-semibold mt-4 text-2xl font-semibold text-center'>2FA Enabled</h2>


                </div>
                }
                {page == 1 && <>
                    <div className='mb-8'>
                        <h2 className="font-semibold text-2xl">
                            Enable 2FA
                        </h2>
                        <p>Scan code with authenticator App</p>
                    </div>
                    <img src={qrCode} alt="" className='w-[80vw]' />
                    <IonChip outline className='border flex items-center' color={'dark'}>
                        <IonLabel>
                            {secret}
                        </IonLabel>
                        <button className='ml-3' >
                            <IonIcon icon={copyOutline} />
                        </button>
                    </IonChip>
                    <IonToolbar color={'none'}>
                        <IonButton onClick={() => setPage(2)} fill='clear' slot='end' className='mt-5'>
                            Next <IonIcon icon={chevronForward} className='slot-start' />
                        </IonButton>
                    </IonToolbar>
                </>
                }

                {page == 2 && <form onSubmit={set2FA}>
                    <IonToolbar color={'none'} className='mb-8'>
                        <IonButton onClick={() => setPage(1)} fill='clear' slot='start' className='mt-5'>
                            Scan Code Again <IonIcon icon={chevronBack} slot='start' />
                        </IonButton>
                    </IonToolbar>
                    <h2 className='text-semibold mb-4'>Please Provide 6 digit code</h2>
                    <IonInput
                        required

                        value={code} onIonInput={(e) => setcode(e.detail.value as string)}
                        fill='outline' className='border rounded-md ion-padding-horizontal w-full mb-10 ' />
                    <IonButton type='submit' expand='block'>Enable 2FA</IonButton>
                </form>
                }

            </div>
        </PageLayout>
    )
}

export default TwoFA