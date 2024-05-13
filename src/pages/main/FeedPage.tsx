import { IonAvatar, IonBadge, IonButton, IonButtons, IonCard, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonMenuButton, IonNavLink, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSpinner, IonTitle, IonToolbar, IonicSlides, useIonViewDidEnter } from '@ionic/react'
import { arrowDown, arrowUp, bookmarkOutline, cardOutline, eyeOutline, moonOutline, notifications, notificationsOutline, qrCodeOutline, scanOutline, searchOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainPages } from '../../routes/mainRoutes'
import useFeed, { INews } from '../../hooks/useFeed'
import axios from 'axios'
import PageLayout from '../../components/Layout/PageLayout'
import { Link, useHistory } from 'react-router-dom'

const FeedPage = () => {

    const { getFeed } = useFeed();
    const [topFullNews, setTopFullNews] = useState<INews[]>([])
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // if (axios.defaults.headers.common['Authorization']) {
        setLoading(true)
        setTimeout(() => {
            getNews()
        }, 1000);
        // }
    }, [axios.defaults.headers.common['Authorization']])

    async function getNews() {
        return getFeed().then((results) => {
            results && setTopFullNews(results)
        }).finally(() => {
            setLoading(false)
        });
    }


    return (
        <PageLayout backLink='none' title='News Feed' onRefresh={getNews}>

            <main >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1.1}
                    // onSlideChange={() => console.log('slide change')}
                    pagination={{ clickable: true, type: 'bullets' }}
                //  onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        topFullNews.map((news, index) => {
                            if (index > 4) return;
                            return (
                                <SwiperSlide key={index}>
                                    <IonCard className='h-[25vh] bg-cover p-0 relative' style={{ backgroundImage: `url(${news.image})` }}>
                                        <div className="w-full absolute bottom-0 h-[10vh] pt-4 p-2 flex flex-col justify-end " style={{ backgroundImage: "linear-gradient(to top,#000,#000e, #0000)" }}>
                                            <div className='text-white pl-3'>
                                                {news.title}
                                            </div>
                                        </div>
                                    </IonCard>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </main>
            <main className=''>

                {/* <div className="w-[100vw]  overflow-x-scroll">
                    <div className="w-[150vw] py-2">
                        {
                            newsCategories.map((cat, index) => (
                                <IonChip key={index} className='p-2' color={index == 0 ? "danger" : ""}>
                                    {cat}
                                </IonChip>
                            ))
                        }
                    </div>
                </div> */}
            </main>
            <main className=''>
                <h2 className="text-xl font-bold">Top News</h2>

                <div className="">
                    <div className=" py-2">
                        {
                            topFullNews.map((news, index) => (
                                <div key={index} className='p-2 m-0 flex gap-2 items-center' onClick={() => history.push({ pathname: `${mainPages.feed.url}/${news.id}`, state: { feed: news } })}>
                                    <img slot='start' src={news.image} alt="" className='rounded-md w-16 h-16 object-cover' />
                                    <div>

                                        <div className='font-medium text-sm'>
                                            {news.description.substring(0, 70)}...
                                        </div>
                                        <div className='text-xs text-gray-400 flex items-center gap-2'>
                                            {"12/01/2024"} <span className="w-[2px] h-[2px] rounded-full bg-gray-400"></span> Crypto
                                        </div>
                                    </div>
                                    <IonButtons slot='end'>
                                        <IonButton>
                                            <IonIcon icon={bookmarkOutline} />
                                        </IonButton>
                                    </IonButtons>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
            {loading && <div className="h-32 p-10 flex justify-center">
                <IonSpinner className='scale-125' name='crescent' color={'danger'} />
            </div>}
        </PageLayout>
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
