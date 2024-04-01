import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonProgressBar } from '@ionic/react'
import { close } from 'ionicons/icons'
import React from 'react'

const AppProgressHeader: React.FC<{ value: number, total: number }> = ({ total, value }) => {
    return (
        <IonHeader className='ion-no-border'>
            <IonToolbar className=''>
                <div>
                    <div className='flex items-center justify-between '>
                        <IonButtons slot='start'>
                            <IonButton routerLink='/' routerDirection='root' routerOptions={{ unmount: true }} color='dark' >
                                <IonIcon icon={close} />
                            </IonButton>
                        </IonButtons>
                        <IonProgressBar className='rounded py-1' color={'dark'} value={value / total} />
                        <IonButtons slot='start'>
                            <IonButton color='dark' slot='end'>
                                {value}/{total}
                            </IonButton>
                        </IonButtons>
                    </div>

                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default AppProgressHeader