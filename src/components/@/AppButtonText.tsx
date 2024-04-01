import { IonSpinner } from '@ionic/react'
import React from 'react'

const AppButtonText: React.FC<{ loading: boolean, children: any }> = ({ children, loading }) => {
    return (
        <div  >
            {loading ? <IonSpinner /> : <>{children}</>}
        </div>
    )
}

export default AppButtonText