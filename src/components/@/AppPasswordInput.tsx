import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { eyeOutline } from 'ionicons/icons'
import React from 'react'

const AppPasswordInput: React.FC<{ value: string, onChange: (val: string) => void }> = ({ onChange, value }) => {
    return (
        <div className='border rounded-md flex pl-4'>
            <IonInput required value={value} onIonChange={(e) => onChange(e.detail.value as string)} fill='outline' className='  ' />
            <IonButton fill='clear' size='small'>
                <IonIcon icon={eyeOutline} />
            </IonButton>
        </div>

    )
}

export default AppPasswordInput