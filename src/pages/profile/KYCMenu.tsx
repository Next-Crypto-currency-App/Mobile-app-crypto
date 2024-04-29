import { IonBackButton, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { closeCircleOutline, idCard, idCardOutline } from 'ionicons/icons'
import React, { useRef, useState } from 'react'
import AppPinModal from '../../components/@/AppPinModal'
import UploadDocuments from './UploadDocuments'

const KYCMenu = () => {
    const page = useRef(undefined);
    const [addPin, setAddPin] = useState(false)

    return (
        <IonPage ref={page}>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot='start' fill='clear'>
                        <IonBackButton></IonBackButton>
                    </IonButton>
                    <IonTitle>Complete Your Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonToolbar>
                    <IonImg className='w-2/3 m-auto' src="https://media.istockphoto.com/id/1355406617/vector/kyc-or-know-your-customer-with-business-verifying-the-identity-of-its-clients-concept-at-the.jpg?s=612x612&w=0&k=20&c=59BPHdMUNGFupGjKuoBZigYEzlRZRFxi2F6giF4p5pc=" />
                </IonToolbar>
                <IonToolbar>
                    <IonItem onClick={() => setAddPin(true)} button id='open-pin' >
                        <img className='w-[2rem]' src={"/assets/pin.png"} slot='start' /> <IonLabel>Pin <IonIcon color='danger' icon={closeCircleOutline} /></IonLabel>
                    </IonItem>
                    <IonItem button routerLink={profilePages.uploadDocuments.url} >
                        <img className='w-[2rem]' src={"/assets/photo-front.png"} slot='start' /> <IonLabel>Upload Documents <IonIcon color='danger' icon={closeCircleOutline} /></IonLabel>
                    </IonItem>
                    <IonItem button >
                        <img className='w-[2rem] rounded' src={"/assets/selfie.png"} slot='start' /> <IonLabel>Selfie <IonIcon color='danger' icon={closeCircleOutline} /></IonLabel>
                    </IonItem>

                </IonToolbar>
            </IonContent >
            <AppPinModal isOpen={addPin} onDidmiss={() => setAddPin(false)} />
        </IonPage >
    )
}

export default KYCMenu


export const profilePages = {
    kycMenu: {
        name: "KYC Menu",
        url: "/kyc-menu",
        page: KYCMenu
    },
    uploadDocuments: {
        name: "Upload documents",
        url: "/upload-documents",
        page: UploadDocuments
    },
    kycMen: {
        name: "KYC Menu",
        url: "/kyc-menu",
        page: KYCMenu
    },
    kycMe: {
        name: "KYC Menu",
        url: "/kyc-menu",
        page: KYCMenu
    },
}