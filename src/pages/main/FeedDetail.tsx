import { IonBackButton, IonButtons, IonCard, IonChip, IonContent, IonHeader, IonIcon, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react'
import { useLocation } from 'react-router'
import useFeed, { INews } from '../../hooks/useFeed'
import FeedReactionButton from '../../components/Feed/FeedReactionButton'
import { useState } from 'react'
import { chatboxEllipsesOutline, ellipseOutline } from 'ionicons/icons'
import CommentsManagement from '../../components/Feed/CommentsManagement'

const FeedDetail = () => {
    const state = useLocation().state;
    const feed = (state as { feed: INews } | undefined)?.feed
    const [feedNews, setFeedNews] = useState(feed)
    const { getPostById } = useFeed()
    const [commentMode, setCommentMode] = useState(false)

    async function fetchNews() {
        if (feedNews?.id) {
            const result = await getPostById(feedNews?.id)

            if (result) {
                setFeedNews(result)
            }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>News Feed</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={async (e) => { await fetchNews(); e.detail.complete() }}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonCard className='h-[25vh] bg-cover p-0 relative rounded-xl' style={{ backgroundImage: `url(${feed?.image})` }}>
                    <IonChip className='top-2 right-2 absolute' color={'success'}>
                        Cryto
                    </IonChip>

                </IonCard>
                <div className='ion-padding space-y-5'>
                    <h1 className='text-xl font-bold'>{feedNews?.title}</h1>
                    <div className="flex gap-2 items-center text-gray-500 text-sm justify-between">
                        <img src={feedNews?.image} className='w-8 h-8 rounded-full object-cover' alt="" />
                        {/* <div>Lloyd Sikeba</div>
                        <div className="w-[3px] h-[3px] bg-gray-500 rounded-full"></div>
                        Wed 05, July 2022 */}

                    </div>
                    {!commentMode && <div className=' text-sm whitespace-break-spaces transition-all' style={{ height: "auto" }}>
                        {feedNews?.description}
                    </div>}
                    {/* <blockquote>
                        <div className=' text-sm border-l-2 ml-2 border-l-red-500 pl-3 text-red-900'>
                            There has been a lot of speculation about the future of bitcoin in Australia
                            after the country's financial regulator said it would consider banning the
                            cryptocurrency. The Australian Securities and Investments Commission (ASIC)
                            said it was considering whether to ban the sale of bitcoin and other cryptocurrencies
                        </div>
                    </blockquote>
                    <div className=' text-sm'>
                        Due to the current happenings in the world, the price of bitcoin has collapsed in Australia after the country's
                        financial regulator said it would consider banning the cryptocurrency.
                        The Australian Securities and Investments Commission (ASIC) said it was
                        considering whether to ban the sale of bitcoin and other cryptocurrencies
                        to retail investors.
                        However we believe that the price of bitcoin will rise again in the coming months.
                    </div> */}

                </div>
                {feed && commentMode && <CommentsManagement onBack={() => setCommentMode(false)} feed={feed} />}
                <div className="h-44"></div>

            </IonContent>
            {feedNews && !commentMode && <FeedReactionButton onComment={(mode) => setCommentMode(mode)} onReaction={fetchNews} feed={feedNews} />}
        </IonPage >
    )
}

export default FeedDetail