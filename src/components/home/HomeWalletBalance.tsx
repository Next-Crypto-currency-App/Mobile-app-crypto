import { IonIcon, IonSkeletonText } from '@ionic/react'
import { chevronDown, eyeOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'

const HomeWalletBalance = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, [])

    return (
        <>
            {
                loading ? <>
                    <IonSkeletonText class='h-8 w-10 rounded-md' animated />
                    <IonSkeletonText class='h-8 w-20 rounded-md' animated />
                </> : <div className=''>
                    <div className="flex items-center">Wallet Bitcoin <IonIcon icon={chevronDown} /> </div>
                    <h3 className='text-2xl font-bold flex gap-x-2'>$10.99 <IonIcon icon={eyeOutline} /></h3>
                </div>
            }
        </>
    )
}

export default HomeWalletBalance
