import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonRefresher, IonRefresherContent, RefresherEventDetail, IonMenuButton } from '@ionic/react'
import React from 'react'
import { mainPages } from '../../routes/mainRoutes'

const PageLayout: React.FC<{ onRefresh?: (event: CustomEvent<RefresherEventDetail>) => Promise<any>, backLink?: string, title: string, children: any }> = ({ onRefresh, backLink, title, children }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        {backLink != "none" ? <IonBackButton defaultHref={backLink || mainPages.home.url}></IonBackButton> : <IonMenuButton />}
                    </IonButtons>
                    <IonTitle>
                        {title}
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding '>
                <IonRefresher slot="fixed" onIonRefresh={async (e) => { onRefresh && (await onRefresh(e)); e.detail.complete() }}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                {children}
            </IonContent>
        </IonPage>

    )
}

export default PageLayout