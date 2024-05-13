import React, { useState } from 'react'
import useFeed, { INews } from '../../hooks/useFeed'
import { IonButton, IonButtons, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPopover, IonTextarea, IonToolbar, useIonToast } from '@ionic/react'
import { chevronBack, ellipsisHorizontal, paperPlane } from 'ionicons/icons'
import millify from 'millify'
import { SimpleFeedReactionButton } from './FeedReactionButton'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import CommentItem from './CommentItem'

const CommentsManagement = ({ feed, onBack }: { feed: INews, onBack: () => void, }) => {

    const [value, setValue] = useState("")
    const { addFeedComment } = useFeed()
    const [loading, setLoading] = useState(false)
    const user = useSelector(selectUser)
    const [feedNews, setFeedNews] = useState<INews>(feed)
    const { getPostById } = useFeed()

    async function fetchNews() {
        if (feedNews?.id) {
            const result = await getPostById(feedNews?.id)

            if (result) {
                setFeedNews(result)
            }
        }
    }

    async function comment() {
        if (!value || !feedNews?.id) return;

        setLoading(true);
        const result = await addFeedComment({ comment: value, newsId: feed.id! }) as any as { success: boolean }
        result && await fetchNews();
        setLoading(false)
        setValue("")

    }


    return (
        <div>
            <IonToolbar color={'none'}>
                <IonButtons slot='start'>
                    <IonButton onClick={onBack} color='danger'>
                        <IonIcon icon={chevronBack} slot='start' />
                        Back
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <IonItem>
                Comments <span className="font-semibold ml-1"> {millify(feedNews.comments.length)}</span>
                <div slot='end'>
                    <SimpleFeedReactionButton feed={feedNews} onReaction={fetchNews} />
                </div>
            </IonItem>

            <IonList className='min-h-[30vh] p-3'>

                {
                    feedNews.comments.map((comment, index) => {
                        return <CommentItem onChange={() => fetchNews()} comment={comment} key={index} />
                    })
                }
                {loading &&
                    <div className={`flex p-2 mb-1 gap-1  ${loading ? "opacity-50" : ""}`} >
                        <div className=' w-[40px]'>
                            <img src="/assets/avatar.svg" className='w-100 ' alt="" />
                        </div>
                        <div className='px-2 bg-gray-50 p-2 w-full'>
                            <div className='text-black text-sm '>
                                <p className="font-bold">{user.username}</p>
                                <p className="whitespace-break-spaces">{value} </p>
                                <p className='text-gray-500 text-end'>now</p>
                            </div>
                        </div>
                    </div>
                }

            </IonList>
            <IonItem color={'light'} className='fixed bottom-0 w-full z-40'>
                <IonTextarea value={value} onIonInput={(e) => setValue(e.detail.value!)} rows={3} placeholder='Add Comment' />
                <IonButton onClick={comment} slot='end'>
                    <IonIcon icon={paperPlane} />
                </IonButton>
            </IonItem>
        </div>
    )
}

export default CommentsManagement