import { IonBackButton, IonButtons, IonCard, IonCheckbox, IonContent, IonHeader, IonPage, IonRadio, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import AppCameraModal from '../../components/@/AppCameraModal'


const UploadDocuments = () => {
    const [openModal, setOpenModal] = useState(false)

    // useEffect(() => {
    //     CameraPreview.stop()
    // }, [])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Upload documents
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding '>
                <section className="pt-6">
                    <h2 className='font-semibold'>ID Verification</h2>
                    <p>
                        We need your ID to verify your information
                    </p>
                    <div className='mt-4'>
                        <div className="grid grid-cols-2 gap-3">
                            <IonCard button className='ion-padding space-y-5 m-0'>
                                <div className='flex items-center justify-between'>
                                    <img src="/assets/photo-front.png" className='h-[2rem]' alt="" />
                                    <IonCheckbox checked />
                                </div>
                                <h2 className='font-semibold text-black'>
                                    Personal ID
                                </h2>
                                <div>
                                    National ID, Passport or Driver's Liscence
                                </div>
                            </IonCard>
                            <IonCard button className='ion-padding space-y-5 m-0'>
                                <div className='flex items-center justify-between'>
                                    <img src="/assets/selfie.png" className='h-[2rem]' alt="" />
                                    <IonCheckbox checked />
                                </div>
                                <h2 className='font-semibold text-black'>
                                    Verify Photo
                                </h2>
                                <div>
                                    Veridy your identity with a self captured photo of yourself
                                </div>
                            </IonCard>
                        </div>
                    </div>
                </section>
                <AppCameraModal isOpen={openModal} onDidDismiss={() => setOpenModal(false)}></AppCameraModal>
            </IonContent>
        </IonPage>
    )
}

export default UploadDocuments


//a function that ads two numbers

