import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview'
import { IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonModal, IonPage, IonToolbar } from '@ionic/react'
import { close } from 'ionicons/icons'
import React from 'react'

const cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 1920,
    width: 1080,
    parent: "cameraPreview"
};


const AppCameraModal: React.FC<{ isOpen: boolean, onDidDismiss: () => void }> = ({ isOpen, onDidDismiss }) => {

    function startCamera() {
        CameraPreview.stop()
        CameraPreview.start(cameraPreviewOptions);
    }


    function stopCamera() {
        CameraPreview.stop()
    }

    return (
        <IonModal isOpen={isOpen} onDidDismiss={() => { onDidDismiss(); stopCamera() }} onDidPresent={() => startCamera()}>
            <IonContent>
                <section className='h-full w-full' id='cameraPreview'>

                </section>
            </IonContent>
            <IonFab>
                <IonButton onClick={onDidDismiss} fill='clear' size='large'>
                    <IonIcon icon={close} />
                </IonButton>
            </IonFab>
        </IonModal>
    )
}

export default AppCameraModal