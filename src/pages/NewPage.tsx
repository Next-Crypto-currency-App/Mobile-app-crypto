import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const NewPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>New Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h1>New Page</h1>
            </IonContent>
        </IonPage>
    )
}

export default NewPage