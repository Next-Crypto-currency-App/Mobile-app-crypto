import { IonSkeletonText } from '@ionic/react'
import React from 'react'

const ItemsLoader = () => {
    return (
        <div>
            {
                Array(15).fill(0).map((_, index) => (
                    <div className="flex items-center gap-x-3">
                        <IonSkeletonText className='w-32 h-10 rounded-md' animated />
                        <IonSkeletonText className='w-full h-10 rounded-md' animated />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemsLoader