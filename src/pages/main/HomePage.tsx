import { IonAvatar, IonBadge, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonItemDivider, IonMenuButton, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonTitle, IonToolbar } from '@ionic/react'
import { arrowDown, arrowUp, cardOutline, chevronDown, eyeOutline, moonOutline, notifications, notificationsOutline, qrCodeOutline, scanOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import WatchListSection from '../../components/home/WatchListSection'
import HomeWalletBalance from '../../components/home/HomeWalletBalance'

const HomePage = () => {
    const [currentList, setCurrentList] = useState<"watch" | "all">("watch");

    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Next Crypto</IonTitle>
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
                                <IonIcon icon={arrowUp} />
                            </IonFabButton>
                            <label htmlFor="">Send</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={arrowDown} />
                            </IonFabButton>
                            <label htmlFor="">Receive</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={cardOutline} />
                            </IonFabButton>
                            <label htmlFor="">Buy</label>
                        </div>
                        <div>
                            <IonFabButton mode='ios' size='small'>
                                <IonIcon icon={moonOutline} />
                            </IonFabButton>
                            <label htmlFor="">Sell</label>
                        </div>
                    </div>
                    <section className='space-y-4 pt-3 relative'>
                        <div className='z-10 sticky -top-5 bg-[var(--ion-color-light)]'>
                            <IonSegment value={currentList} onIonChange={(e) => setCurrentList(e.detail.value as "watch")}>
                                <IonSegmentButton value={"watch"}>Watch List</IonSegmentButton>
                                <IonSegmentButton value={"all"}>Coins</IonSegmentButton>
                            </IonSegment>
                        </div>
                        {currentList == "watch" ? <WatchListSection cryptocurrencies={cryptocurrencies} /> : <WatchListSection cryptocurrencies={cryptocurrencies} />}
                    </section>
                </main>

            </IonContent>
        </IonPage >
    )
}

export default HomePage

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
