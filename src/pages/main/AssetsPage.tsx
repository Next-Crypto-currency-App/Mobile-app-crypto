import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonMenuButton, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonTitle, IonToolbar } from '@ionic/react'
import { arrowDown, arrowUp, cardOutline, caretUpCircleOutline, chevronDown, downloadOutline, eyeOutline, moonOutline, notifications, notificationsOutline, qrCodeOutline, scanOutline, swapVerticalOutline, timeOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import WatchListSection from '../../components/home/WatchListSection'
import HomeWalletBalance from '../../components/home/HomeWalletBalance'

const AssetsPage = () => {
    const [currentList, setCurrentList] = useState<"crypto" | "all" | 'fiat'>("all");

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Assets</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton size='small'>
                            <IonIcon icon={scanOutline} />
                        </IonButton>
                        <IonButton size='small'>
                            <IonIcon icon={notificationsOutline} />
                            {/* <IonBadge slot='end'>2</IonBadge> */}
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <main className='space-y-1 relative'>
                    <HomeWalletBalance />
                    <div className="flex justify-between text-center border-b">
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={downloadOutline} />
                            </IonFabButton>
                            <label htmlFor="">Deposit</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={caretUpCircleOutline} />
                            </IonFabButton>
                            <label htmlFor="">Withdraw</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={swapVerticalOutline} />
                            </IonFabButton>
                            <label htmlFor="">Swap</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={timeOutline} />
                            </IonFabButton>
                            <label htmlFor="">History</label>
                        </div>
                    </div>
                    <section className='space-y-4 pt-3 relative'>
                        <div className='z-10 sticky -top-5 bg-[var(--ion-color-light)]'>
                            <IonSegment value={currentList} onIonChange={(e) => setCurrentList(e.detail.value as "all")}>
                                <IonSegmentButton value={"all"}>All</IonSegmentButton>
                                <IonSegmentButton value={"crypto"}>Crypto</IonSegmentButton>
                                <IonSegmentButton value={"fiat"}>Fiat</IonSegmentButton>
                            </IonSegment>
                        </div>
                        {currentList == "all" ? <WatchListSection cryptocurrencies={cryptocurrencies} /> : currentList == "crypto" ? <WatchListSection cryptocurrencies={cryptocurrencies.reverse().filter((a, i) => i % 2 == 0)} /> : <WatchListSection cryptocurrencies={cryptocurrencies.filter((a, i) => i % 2 != 0)} />}
                    </section>
                </main>

            </IonContent>
        </IonPage >
    )
}

export default AssetsPage

export const cryptocurrencies = [
    {
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_rK3oQ0OG1HZG60zVuompH3rO--NDr91xQJpFAfmFQ&s",
        name: "Bitcoin",
        short_name: "BTC",
        amount: 42356.78,
        change: -0.12
    },
    {
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnzm-5w3URZhSmzmusY8pIC4ETmDhNO4fTZ9LMEgklw&s",
        name: "Ethereum",
        short_name: "ETH",
        amount: 3124.91,
        change: 0.34
    },
    {
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZh3Gf2EvRs991qUPwQgLr7KRI98wayg47AEy1nbXYQ&s",
        name: "Tether",
        short_name: "USDT",
        amount: 1.00,
        change: -0.14
    },
    {
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/768px-Binance_Logo.svg.png",
        name: "Binance Coin",
        short_name: "BNB",
        amount: 432.10,
        change: 0.12
    },
    {
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEb5a-j9b0VINVW_RseafPC6eVB1SybbMBiCdqjQ3W0w&s",
        name: "Cardano",
        short_name: "ADA",
        amount: 1.25,
        change: -0.12
    },
    {
        image_url: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
        name: "USD Coin",
        short_name: "USDC",
        amount: 1.00,
        change: 0.00
    },
    {
        image_url: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
        name: "XRP",
        short_name: "XRP",
        amount: 0.78,
        change: -1
    },
    {
        image_url: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
        name: "Dogecoin",
        short_name: "DOGE",
        amount: 0.14,
        change: 4
    },


];
