import { IonCard, IonCheckbox, IonProgressBar, useIonLoading } from '@ionic/react'
import React, { useState } from 'react'
import AppCameraModal from '../@/AppCameraModal'
import useFirebaseStorage from '../../hooks/useFirebaseStorage'

const KYCImageCard: React.FC<{ value: string, onChange: (result: string) => void, KYCItem: { title: string, desc: string, id: string }, disabled?: boolean }> = ({ value, onChange, KYCItem, disabled }) => {
    const [openModal, setOpenModal] = useState(false)
    const [loading, stopLoading] = useIonLoading()
    const { uploadPhoto } = useFirebaseStorage()
    const { desc, id, title } = KYCItem


    async function process(result: string | undefined) {
        if (result) {
            loading({ message: "Uploading Image", duration: 6000 });
            const url = await uploadPhoto({ base64Image: result, name: "Oben Desmond", type: id })
            stopLoading();
            console.log("URL", url)
            url && onChange(url);
        }
    }
    return (
        <>
            <IonCard disabled={disabled || false} onClick={() => setOpenModal(true)} button className='m-0'>
                {value && <IonProgressBar color={'success'} value={100} />}
                <div className='ion-padding space-y-5' color='success'>
                    <div className='flex items-center justify-between'>
                        <img src={`/assets/${id == "front_id" ? "photo-front" : id == "back_id" ? "photo-back" : "selfie"}.png`} className='h-[2rem]' alt="" />
                        <IonCheckbox color={'success'} checked={!!value} />
                    </div>
                    <h2 className='font-semibold text-black'>
                        {title}
                    </h2>
                    <div>
                        {desc}
                    </div>
                </div>
            </IonCard>

            <AppCameraModal isOpen={openModal} onDidDismiss={(result) => { setOpenModal(false); process(result) }}></AppCameraModal >

        </>
    )
}

export default KYCImageCard