import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenu, IonToggle, IonToolbar } from '@ionic/react'
import { moonOutline, notificationsOutline, personOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { toggleDarkTheme } from '../../utils';
import { useDispatch } from 'react-redux';
import { logoutUser, selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';

const MainMenu = () => {
    const themeLocalStorage = localStorage.getItem('theme')
    const [themeValue, setThemeValue] = useState(themeLocalStorage === 'dark' ? true : false)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

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

    function logout() {
        dispatch(logoutUser())
    }
    return (
        <IonMenu contentId='main-menu-content'  >
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <div className="flex justify-center flex-col items-center py-10 min-h-[20vh] gap-y-1">
                        <img src="/assets/avatar.svg" className='w-20' alt="" />
                        <h2>Joh Moris</h2>
                        <p>{user.email}</p>
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
                        <IonItem lines='none' button>
                            <IonLabel color={'danger'} onClick={logout}>Logout</IonLabel>
                        </IonItem>
                    </IonList>
                </div>

            </IonContent>
        </IonMenu>
    )
}

export default MainMenu