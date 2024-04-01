import { IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonTitle, IonToolbar, IonicSlides } from '@ionic/react'
import { arrowDown, arrowUp, bookmarkOutline, cardOutline, eyeOutline, moonOutline, notifications, notificationsOutline, qrCodeOutline, scanOutline, searchOutline } from 'ionicons/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainPages } from '../../routes/mainRoutes'

const FeedPage = () => {
    return (
        <IonPage>
            <IonHeader className='ion-no-border'>
                <IonToolbar className='' >
                    <div className="flex items-center  justify-between">
                        <IonButtons>
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>Feed</IonTitle>
                        <IonButtons slot='end'>
                            <IonFabButton mode='ios' color='light' size='small'>
                                <IonIcon icon={notificationsOutline} />
                            </IonFabButton>
                            <IonFabButton mode='ios' color='light' size='small'>
                                <IonIcon icon={searchOutline} />
                            </IonFabButton>
                        </IonButtons>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className=''>
                <main >
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1.1}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ clickable: true, type: 'bullets' }}
                    //  onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            topNews.map((news, index) => (
                                <SwiperSlide key={index}>
                                    <IonCard className='h-[25vh] bg-cover p-0 relative' style={{ backgroundImage: `url(${news.image})` }}>
                                        <div className="w-full absolute top-1/3 h-full pt-4 p-2 " style={{ backgroundImage: "linear-gradient(to top,#000,#000, #0000)" }}>
                                            <IonChip color={'success'}>
                                                {news.cat}
                                            </IonChip>
                                            <p className='text-white pl-3'>
                                                {news.description}
                                            </p>
                                        </div>
                                    </IonCard>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </main>
                <main className=''>

                    <div className="w-[100vw]  overflow-x-scroll">
                        <div className="w-[150vw]">
                            {
                                newsCategories.map((cat, index) => (
                                    <IonChip key={index} className='p-2' color={index == 0 ? "danger" : ""}>
                                        {cat}
                                    </IonChip>
                                ))
                            }
                        </div>
                    </div>
                </main>
                <main className=''>

                    <div className="">
                        <div className=" py-2">
                            {
                                topFullNews.map((news, index) => (
                                    <IonItem key={index} className='p-2' lines='none' routerLink={mainPages.feed.url + "/1"}>
                                        <img slot='start' src={news.avatar} alt="" className='rounded-md w-16 h-16 object-cover' />
                                        <p>
                                            <div className="flex items-center gap-1">
                                                <img src={news.avatar} alt="" className="w-5 h-5 rounded-full bg-cover" />
                                                <p>Martin Pk</p>

                                            </div>
                                            <p className='font-medium text-sm'>
                                                {news.desc}
                                            </p>
                                            <p className='text-xs text-gray-400 flex items-center gap-2'>
                                                {news.date} <span className="w-[2px] h-[2px] rounded-full bg-gray-400"></span> {news.cat}
                                            </p>
                                        </p>
                                        <IonButtons slot='end'>
                                            <IonButton>
                                                <IonIcon icon={bookmarkOutline} />
                                            </IonButton>
                                        </IonButtons>
                                    </IonItem>
                                ))
                            }
                        </div>
                    </div>
                </main>

            </IonContent>
        </IonPage >
    )
}

export default FeedPage

const newsCategories = [
    "Hot News",
    "Sports",
    "Invest",
    "Health",
    "Tips",
    "Tech",
    "Politics",
    "Entertainment",

]

const topNews = [
    {
        cat: "News",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto corrupti earum id?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s"
    },
    {
        cat: "News",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto corrupti earum id?",
        image: "https://www.bankrate.com/2022/07/07151503/Cryptocurrency-statistics.jpeg?auto=webp&optimize=high"
    },
    {
        cat: "News",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto corrupti earum id?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s"
    },
    {
        cat: "News",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto corrupti earum id?",
        image: "https://www.bankrate.com/2022/07/07151503/Cryptocurrency-statistics.jpeg?auto=webp&optimize=high"
    }
]


const topFullNews = [
    {
        cat: "Sports",
        title: "Amazing Goal",
        desc: "Player scores an incredible goal",
        date: "2024-03-27",
        is_bookmarked: true,
        post_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s",
        user_name: "JohnDoe"
    },
    {
        cat: "Technology",
        title: "New Smartphone Release",
        desc: "Company unveils its latest smartphone",
        date: "2024-03-26",
        is_bookmarked: false,
        post_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyD7Sg5MyYfowqgiJjxwERrQe_NJ9Zj6DmzIb1GqRqQ&s",
        user_name: "JaneSmith"
    }
];

