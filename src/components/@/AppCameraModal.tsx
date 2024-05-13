import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview'
import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonModal, IonPage, IonToolbar, useIonLoading } from '@ionic/react'
import { atCircleSharp, cameraOutline, checkmarkSharp, close, closeSharp, radioButtonOn } from 'ionicons/icons'
import React, { useState } from 'react'

const cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 2020,
    width: 580,
    parent: "cameraPreview"
};


const AppCameraModal: React.FC<{ isOpen: boolean, onDidDismiss: (base64?: string) => void }> = ({ isOpen, onDidDismiss }) => {

    const [image, setImage] = useState('')
    const [loading] = useIonLoading()

    async function capturePhoto() {
        const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
            quality: 90
        };

        const result = await CameraPreview.capture(cameraPreviewPictureOptions);
        const base64PictureData = result.value;
        setImage(`data:image/png;base64,${base64PictureData}`)
        stopCamera()


    }

    function startCamera() {
        setImage("")
        loading({ duration: 1200 })
        setTimeout(() => {
            CameraPreview.start(cameraPreviewOptions);
        }, 1000);
    }


    function stopCamera() {

        CameraPreview.stop()
    }

    return (
        <IonModal isOpen={isOpen} onDidDismiss={() => { onDidDismiss(); stopCamera() }} onDidPresent={() => startCamera()}>
            <IonContent>
                <section className='h-screen bg-black w-full flex flex-col justify-center relative text-white' >
                    {image ?
                        <div>
                            <img src={image} alt="" />
                        </div>
                        : <div id='cameraPreview'></div>}

                    <div className="absolute bottom-5 w-full flex justify-center gap-x-8">
                        {!image && <IonFabButton onClick={capturePhoto}>
                            <IonIcon size='large' icon={radioButtonOn} />
                        </IonFabButton>}
                        {image && <IonFabButton color='light' onClick={() => { startCamera() }} >
                            <IonIcon icon={closeSharp} />
                        </IonFabButton>}
                        {image && <IonFabButton onClick={() => { onDidDismiss(image) }} color='success'>
                            <IonIcon icon={checkmarkSharp} />
                        </IonFabButton>}
                    </div>
                </section>
            </IonContent>
            <IonFab>
                <IonButton onClick={() => onDidDismiss()} fill='clear' size='large' color={'light'}>
                    <IonIcon icon={close} />
                </IonButton>
            </IonFab>

        </IonModal>
    )
}

export default AppCameraModal