import { IonBackButton, IonButton, IonButtons, IonCard, IonCheckbox, IonChip, IonContent, IonFab, IonHeader, IonPage, IonRadio, IonRefresher, IonRefresherContent, IonSpinner, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import PersonalIDUploadCardFront from '../../components/profile/KYCImageCard'
import KYCImageCard from '../../components/profile/KYCImageCard'
import { useProfile } from '../../hooks/useProfile'
import { useEffectReducer } from 'react-pin-field'
import { KYCResponse } from '../../interfaces/profile'
import { securityPages } from './securityPages'
import { mainPages } from '../../routes/mainRoutes'


const UploadDocuments = () => {
    const [document, setDocument] = useState<[string, string]>(["", ""])
    const [selfie, setSelfie] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const { submitKYC, getKYCInfo } = useProfile()
    const [kycDocument, setKycDocument] = useState<KYCResponse>()


    useEffect(() => {
        getKYCStatus()
    }, [])

    useEffect(() => {

        if (kycDocument) {
            setDocument([kycDocument.document[0], kycDocument.document[1]])
            setSelfie(kycDocument.selfie);
        }
    }, [kycDocument])


    async function getKYCStatus(event?: CustomEvent<RefresherEventDetail>) {
        setLoading(true)
        const info = await getKYCInfo() as { kyc: KYCResponse }
        setLoading(false)
        if (info?.kyc && info.kyc.id) setKycDocument(info.kyc);

        if (event) {
            event.detail.complete();
        }

    }
    async function submit() {

        setLoading(true)

        await submitKYC({ docType: "passport", document, selfie, status: "", userId: "" })

        setLoading(false)
        getKYCStatus()



    }
    useEffect(() => {
        console.log({ document, selfie })
    }, [document, selfie])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref={mainPages.home.url}></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Upload documents
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding '>
                <IonRefresher slot="fixed" onIonRefresh={getKYCStatus}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <section className="pt-6">
                    <h2 className='font-semibold'>ID Verification</h2>
                    <p>
                        We need your ID to verify your information
                    </p>
                    {kycDocument?.status && <IonChip className='capitalize' color={kycDocument.status == "pending" ? 'warning' : kycDocument.status == "rejected" ? "danger" : "success"}>
                        {kycDocument.status}
                    </IonChip>}
                    <div className='mt-4'>
                        <div className="grid grid-cols-2 gap-3">
                            <KYCImageCard disabled={!!kycDocument?.document[0] && kycDocument.status != "rejected"} value={document[0]} onChange={(result) => { setDocument([result, document[1]]) }} KYCItem={{ title: "Front ID", desc: "National ID, Passport or Driver's Liscence", id: "front_id" }} />
                            <KYCImageCard disabled={!!kycDocument?.document[1] && kycDocument.status != "rejected"} value={document[1]} onChange={(result) => { setDocument([document[0], result]) }} KYCItem={{ title: "Back ID", desc: "National ID, Passport or Driver's Liscence", id: "back_id" }} />
                            <KYCImageCard disabled={!!kycDocument?.selfie && kycDocument.status != "rejected"} value={selfie} onChange={(result) => { setSelfie(result) }} KYCItem={{ title: "Verify Photo", desc: " Verify your identity with a self captured photo of yourself", id: "selfie" }} />
                        </div>
                    </div>
                </section>
            </IonContent>
            {!(kycDocument?.status == "pending" || kycDocument?.status == "completed") && <IonToolbar className='pb-3'>
                <IonButton onClick={submit} disabled={(!(document[0] && document[1] && selfie)) || loading} expand='block'>
                    {loading ? <IonSpinner /> : "Submit"}
                </IonButton>
            </IonToolbar>}
        </IonPage>
    )
}

export default UploadDocuments


//a function that ads two numbers

