import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu, IonToggle, IonToolbar } from '@ionic/react'
import { moonOutline, notificationsOutline, personOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { toggleDarkTheme } from '../../utils';

const MainMenu = () => {
    const themeLocalStorage = localStorage.getItem('theme')
    const [themeValue, setThemeValue] = useState(themeLocalStorage === 'dark' ? true : false)

    useEffect(() => {

        if (!themeLocalStorage) {
            // Use matchMedia to check the user preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

            toggleDarkTheme(prefersDark.matches);
            setThemeValue(prefersDark.matches)
            // Listen for changes to the prefers-color-scheme media query
            prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));
        }

    }, []);


    return (
        <IonMenu contentId='main-menu-content'  >
            <IonHeader>
                <IonToolbar>
                    <div className="flex justify-center flex-col items-center py-10 min-h-[20vh] gap-y-1">
                        <img src="/assets/avatar.svg" className='w-20' alt="" />
                        <h2>Joh Moris</h2>
                        <p>john@gmail.com</p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='space-y-[2px] py-3'>
                    <IonItem lines='none' >
                        <IonIcon slot='start' icon={moonOutline}></IonIcon>
                        <IonLabel>Theme</IonLabel>
                        <IonToggle checked={themeValue} onIonChange={(e) => { toggleDarkTheme(e.detail.checked); setThemeValue(e.detail.checked) }} slot='end' />
                    </IonItem>
                    <IonList className='ion-padding'>
                        <h3 className='font-semibold'>Accounts</h3>
                        <IonItem lines='none' button>
                            <IonLabel>Theme</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button>
                            <IonLabel>Profile</IonLabel>
                        </IonItem>
                    </IonList>
                    <IonList className='ion-padding'>
                        <h3 className='font-semibold'>Security</h3>
                        <IonItem lines='none' button>
                            <IonLabel>PIN</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button>
                            <IonLabel>2FA</IonLabel>
                        </IonItem>
                    </IonList>
                    <IonList className='ion-padding'>
                        <h3 className='font-semibold'>Others</h3>
                        <IonItem lines='none' button>
                            <IonLabel>Rate</IonLabel>
                        </IonItem>
                        <IonItem lines='none' button>
                            <IonLabel>Support</IonLabel>
                        </IonItem>
                    </IonList>
                </div>
            </IonContent>
        </IonMenu>
    )
}

export default MainMenu