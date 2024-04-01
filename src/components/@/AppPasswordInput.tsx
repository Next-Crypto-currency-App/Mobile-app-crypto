import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { eyeOffOutline, eyeOutline } from 'ionicons/icons'
import React, { useState } from 'react'

const AppPasswordInput: React.FC<{ value: string, onChange: (val: string) => void }> = ({ onChange, value }) => {

    const [hidden, setHidden] = useState(true)

    return (
        <div className='border rounded-md flex pl-4'>
            <IonInput type={hidden ? "password" : "text"} required value={value} onIonInput={(e) => onChange(e.detail.value as string)} onIonChange={(e) => onChange(e.detail.value as string)} fill='outline' className='  ' />
            <IonButton onClick={() => setHidden(!hidden)} fill='clear' size='small'>
                {hidden ? <IonIcon icon={eyeOffOutline} /> : <IonIcon icon={eyeOutline} />}
            </IonButton>
        </div>

    )
}

export default AppPasswordInput