import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonFabButton, IonIcon, IonContent, IonTitle, IonSegment, IonSegmentButton, IonList, IonItem } from '@ionic/react'
import { notificationsOutline, searchOutline } from 'ionicons/icons'
import React, { useState } from 'react'

const HistoryPage = () => {
    const [tab, setTab] = useState("all")
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar className='' >
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>History</IonTitle>
                    <IonButtons slot='end'>
                        <IonFabButton mode='ios' color='light' size='small'>
                            <IonIcon icon={searchOutline} />
                        </IonFabButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className=''>
                <IonSegment scrollable value={tab} onIonChange={(e) => setTab(e.detail.value as string)}>
                    <IonSegmentButton value={"all"}><small>All</small> </IonSegmentButton>
                    <IonSegmentButton><small>Deposits</small></IonSegmentButton>
                    <IonSegmentButton><small>Withdrawals</small></IonSegmentButton>
                    <IonSegmentButton><small>Swap</small></IonSegmentButton>
                    <IonSegmentButton><small>Transfers</small></IonSegmentButton>
                </IonSegment>
                <IonList className='py-3'>
                    {
                        history.map((transaction, index) => (
                            <div className="flex justify-between text-sm p-2 border-b">
                                <div>
                                    <h3>{transaction.transactionId}</h3>
                                    <p className='text-green-500'>{transaction.status} </p>
                                </div>
                                <div>
                                    <p>{transaction.amount} {transaction.currency}</p>
                                    <p>{transaction.status}</p>
                                </div>
                            </div>
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default HistoryPage

const history = [
    {
        "transactionId": "12345",
        "date": "2024-03-26T09:30:00Z",
        "sender": "0xABCDEF1234567890",
        "recipient": "0x1234567890ABCDEF",
        "amount": 1.2345,
        "currency": "ETH",
        "status": "completed"
    },
    {
        "transactionId": "67890",
        "date": "2024-03-25T14:45:00Z",
        "sender": "0x1234567890ABCDEF",
        "recipient": "0xABCDEF1234567890",
        "amount": 0.5678,
        "currency": "BTC",
        "status": "completed"
    },
    {
        "transactionId": "54321",
        "date": "2024-03-24T18:20:00Z",
        "sender": "0xABCDEF1234567890",
        "recipient": "0x0987654321FEDCBA",
        "amount": 10.0,
        "currency": "LTC",
        "status": "pending"
    },
    {
        "transactionId": "67890",
        "date": "2024-03-25T14:45:00Z",
        "sender": "0x1234567890ABCDEF",
        "recipient": "0xABCDEF1234567890",
        "amount": 0.5678,
        "currency": "BTC",
        "status": "completed"
    },
    {
        "transactionId": "54321",
        "date": "2024-03-24T18:20:00Z",
        "sender": "0xABCDEF1234567890",
        "recipient": "0x0987654321FEDCBA",
        "amount": 10.0,
        "currency": "LTC",
        "status": "pending"
    }
    ,
    {
        "transactionId": "67890",
        "date": "2024-03-25T14:45:00Z",
        "sender": "0x1234567890ABCDEF",
        "recipient": "0xABCDEF1234567890",
        "amount": 0.5678,
        "currency": "BTC",
        "status": "completed"
    },
    {
        "transactionId": "54321",
        "date": "2024-03-24T18:20:00Z",
        "sender": "0xABCDEF1234567890",
        "recipient": "0x0987654321FEDCBA",
        "amount": 10.0,
        "currency": "LTC",
        "status": "pending"
    }
]