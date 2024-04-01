import { IonBackButton, IonButton, IonButtons, IonCard, IonChip, IonContent, IonFab, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { heartOutline, shareSocialOutline } from 'ionicons/icons'
import React from 'react'

const FeedDetail = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Happy Reading</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard className='h-[25vh] bg-cover p-0 relative rounded-xl' style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52P9lvNOColejN9UEEm5gm98_T0rYxxUYBu71uViREQ&s)` }}>
                    <IonChip className='top-2 right-2 absolute' color={'success'}>
                        Environment
                    </IonChip>

                </IonCard>
                <div className='ion-padding space-y-5'>
                    <h1 className='text-xl font-bold'>Collapse big bitcoin peak in Australia after Elon</h1>
                    <div className="flex gap-2 items-center text-gray-500 text-sm">
                        <img src="https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg" className='w-8 h-8 rounded-full object-cover' alt="" />
                        <p>Lloyd Sikeba</p>
                        <div className="w-[3px] h-[3px] bg-gray-500 rounded-full"></div>
                        Wed 05, July 2022
                    </div>
                    <p className=' text-sm'>
                        The price of bitcoin has collapsed in Australia after the country's
                        financial regulator said it would consider banning the cryptocurrency.
                        The Australian Securities and Investments Commission (ASIC) said it was
                        considering whether to ban the sale of bitcoin and other cryptocurrencies
                        to retail investors.
                    </p>
                    <blockquote>
                        <p className=' text-sm border-l-2 ml-2 border-l-red-500 pl-3 text-red-900'>
                            There has been a lot of speculation about the future of bitcoin in Australia
                            after the country's financial regulator said it would consider banning the
                            cryptocurrency. The Australian Securities and Investments Commission (ASIC)
                            said it was considering whether to ban the sale of bitcoin and other cryptocurrencies
                        </p>
                    </blockquote>
                    <p className=' text-sm'>
                        Due to the current happenings in the world, the price of bitcoin has collapsed in Australia after the country's
                        financial regulator said it would consider banning the cryptocurrency.
                        The Australian Securities and Investments Commission (ASIC) said it was
                        considering whether to ban the sale of bitcoin and other cryptocurrencies
                        to retail investors.
                        However we believe that the price of bitcoin will rise again in the coming months.
                    </p>

                </div>

            </IonContent>
            <IonFab vertical='bottom' horizontal='center' className='-mb-3'>
                <IonCard mode='ios' style={{ 'borderRadius': "30px" }}>
                    <div className="flex items-center">
                        <IonButton shape='round' fill='clear'>
                            <IonIcon icon={heartOutline} />
                        </IonButton>
                        <IonButton shape='round' fill='clear'>
                            <IonIcon icon={shareSocialOutline} />
                        </IonButton>
                    </div>
                </IonCard>
            </IonFab>
        </IonPage>
    )
}

export default FeedDetail