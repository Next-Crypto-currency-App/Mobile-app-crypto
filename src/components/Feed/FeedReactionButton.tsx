import { IonFab, IonCard, IonButton, IonIcon, IonBadge } from '@ionic/react'
import { chatbubbles, chatbubblesOutline, heart, heartOutline, shareSocialOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import useFeed, { INews } from '../../hooks/useFeed'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'
import millify from 'millify'

const FeedReactionButton = ({ feed, onReaction, onComment }: { feed: INews, onReaction: () => Promise<any>, onComment: (mode: boolean) => void }) => {
    const { likeFeed, unlikeFeed } = useFeed()
    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(false)
    const userLiked = !!feed.likes.find((news) => news.userId == String(user.id))
    const [commentMode, setCommentMode] = useState(false)

    async function like() {
        if (userLiked) return unlike();

        setLoading(true)
        const result = await likeFeed({ newsId: String(feed.id), userId: String(user.id) })
        result && await onReaction();
        setLoading(false);
    }

    async function unlike() {
        if (!userLiked || !feed.id) return;

        setLoading(true)
        const result = await unlikeFeed(feed.id)
        result && await onReaction();
        setLoading(false);
    }


    return (

        <IonFab vertical='bottom' horizontal='center' className='-mb-3'>

            <IonCard mode='ios' style={{ 'borderRadius': "30px" }}>
                <div className="flex items-center">
                    <IonButton onClick={like} disabled={loading} fill='clear'>
                        <IonIcon icon={userLiked ? heart : heartOutline} />
                        {feed.likes.length > 0 && <IonBadge slot='end' >{millify(feed.likes.length)}</IonBadge>}
                    </IonButton>
                    <IonButton onClick={() => { onComment(!commentMode); setCommentMode(!commentMode) }} fill='clear'>
                        <IonIcon icon={chatbubblesOutline} />
                        {feed.comments.length > 0 && <IonBadge slot='end' >{millify(feed.comments.length)}</IonBadge>}
                    </IonButton>
                    <IonButton fill='clear'>
                        <IonIcon icon={shareSocialOutline} />
                    </IonButton>
                </div>
            </IonCard>
        </IonFab>
    )
}

export default FeedReactionButton




export const SimpleFeedReactionButton = ({ feed, onReaction }: { feed: INews, onReaction: () => Promise<any>, }) => {
    const { likeFeed, unlikeFeed } = useFeed()
    const user = useSelector(selectUser)
    const [loading, setLoading] = useState(false)
    const userLiked = !!feed.likes.find((news) => news.userId == String(user.id))
    const [commentMode, setCommentMode] = useState(false)

    async function like() {
        if (userLiked) return unlike();

        setLoading(true)
        const result = await likeFeed({ newsId: String(feed.id), userId: String(user.id) })
        result && await onReaction();
        setLoading(false);
    }

    async function unlike() {
        if (!userLiked || !feed.id) return;

        setLoading(true)
        const result = await unlikeFeed(feed.id)
        result && await onReaction();
        setLoading(false);
    }


    return (

        <div className="flex items-center">
            <IonButton onClick={like} disabled={loading} fill='clear'>
                <IonIcon icon={userLiked ? heart : heartOutline} />
                {feed.likes.length > 0 && <IonBadge slot='end' >{millify(feed.likes.length)}</IonBadge>}
            </IonButton>
            <IonButton fill='clear'>
                <IonIcon icon={shareSocialOutline} />
            </IonButton>
        </div>

    )
} 