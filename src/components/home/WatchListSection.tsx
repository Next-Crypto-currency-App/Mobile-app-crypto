import { IonItem } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { cryptocurrencies } from '../../pages/main/HomePage'
import ItemsLoader from '../Skeletons/ItemsLoader'

const WatchListSection: React.FC<{ cryptocurrencies: typeof cryptocurrencies }> = ({ cryptocurrencies }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <section className='space-y-3'>
            {loading && <ItemsLoader />}
            {
                cryptocurrencies.reverse().map((crypto, index) => {
                    return (
                        <IonItem key={index} lines='full' className='py-[2px]'>
                            <img className='w-10 h-10' slot='start' src={crypto.image_url} />
                            <div>
                                <h2>
                                    {crypto.name}
                                </h2>
                                <div>
                                    {crypto.short_name}
                                </div>
                            </div>
                            <div slot='end' className='text-end'>
                                <div>${crypto.amount}</div>
                                <div>{crypto.change < 0 ? <small className='text-red-400'>{crypto.change}</small> : <small className='text-green-400'>+{crypto.change}</small>}</div>
                            </div>
                        </IonItem>
                    )
                })
            }
        </section>
    )
}

export default WatchListSection