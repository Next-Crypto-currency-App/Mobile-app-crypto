
import React, { useEffect, useRef, useState } from 'react';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonLoading,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';
import { mainPages } from '../../routes/mainRoutes';


const SetPinPage = () => {

    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [code, setCode] = useState<string[]>([]);
    const { setPin } = useProfile()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handlePinChange = (index: number, value: string) => {
        const newPin = [...code];
        newPin[index] = value;
        setCode(newPin);

        if (value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        } else if (value.length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleKeyUp = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && code[index].length === 0 && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePinVerification = async () => {
        const code = inputRefs.current.map((el) => el.value).join("")
        if (code.length < 4) {
            return;
        }
        setLoading(true)
        await setPin({ code })
        setLoading(false)

    };

    return (
        <IonPage >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'><IonBackButton defaultHref={mainPages.home.url} /></IonButtons>
                    <IonTitle>Set Your Pin</IonTitle>

                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonLoading isOpen={loading} onDidDismiss={() => setLoading(false)} />
                <div className="h-[60vh] flex flex-col justify-center items-center ">
                    <div className="p-5 flex justify-center items-center gap-x-4 mb-10">
                        {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                value={code[index] || ''}
                                onChange={(e) => { handlePinChange(index, e.target.value); if (index == 3) { handlePinVerification() } }}
                                onKeyUp={(e) => handleKeyUp(index, e)}
                                ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
                                type="number"
                                maxLength={1}
                                className="bg-white border w-[4rem] h-[4rem] rounded text-center flex flex-row outline-red-500"
                            />
                        ))}
                    </div>
                </div>
                <div></div>
            </IonContent>
        </IonPage>
    );
};


export default SetPinPage