import { IonIcon, IonPopover, IonItem, useIonToast } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
import React, { useState } from 'react'
import useFeed, { INews } from '../../hooks/useFeed';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';

const CommentItem = ({ comment, onChange }: { comment: INews["comments"][0], onChange: () => void }) => {
    const user = useSelector(selectUser)
    const trigger = 'option-' + comment.id;
    const { deleteFeedComment } = useFeed();
    const [loading, setLoading] = useState(false)
    const [toast] = useIonToast()

    async function deleteComment() {

        if (!comment.id) return;

        setLoading(true)
        const result = await deleteFeedComment(comment.id) as any as { success: boolean }
        result.success && onChange()
        setLoading(false)
        result.success && toast({ message: "Deleted Comment!", duration: 3000 });


    }


    return (
        <div className={`flex p-2 mb-1 gap-1  ${loading ? "opacity-50" : ""}`} >
            <div className=' w-[40px]'>
                <img src="/assets/avatar.svg" className='w-100 ' alt="" />
            </div>
            <div className='px-2 bg-gray-50 p-2 w-full'>

                <div className='text-black text-sm '>
                    <section className="font-bold flex justify-between">
                        <p>{comment.username}</p>
                        <div>
                            {comment.userId == user.id && <div >
                                <button id={trigger}>
                                    <IonIcon icon={ellipsisHorizontal} />
                                </button>
                                <IonPopover dismissOnSelect trigger={trigger}>
                                    <IonItem onClick={() => deleteComment()} className='text-red-500'>Delete</IonItem>
                                </IonPopover>
                            </div>}
                        </div>
                    </section>
                    <p className="whitespace-break-spaces">{comment.comment} </p>
                    <p className='text-gray-500 text-end'>3h ago</p>
                </div>
            </div>
        </div>
    )
}

export default CommentItem