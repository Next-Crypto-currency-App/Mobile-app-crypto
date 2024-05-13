import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonLoading, IonMenu, IonMenuToggle, IonToggle, IonToolbar, useIonLoading } from '@ionic/react'
import { moonOutline, notificationsOutline, personOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { toggleDarkTheme } from '../../utils';
import { useDispatch } from 'react-redux';
import { logoutUser, selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import { getStorage } from '../../utils/storage';
import { useAuth } from '../../hooks/useAuth';
import { mainPages } from '../../routes/mainRoutes';
import { securityPages } from '../../pages/security/securityPages';

const MainMenu = () => {
    const themeLocalStorage = "light"
    const [themeValue, setThemeValue] = useState(themeLocalStorage !== 'light' ? true : false)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const { logout } = useAuth()
    const [loading, setLoading] = useState(false)

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

    async function logoutApp() {
        setLoading(true)
        const value = await logout();
        if (value.success) {
            dispatch(logoutUser());
            setLoading(false)
        }
    }
    return (
        <IonMenu contentId='main-menu-content'  >
            <IonHeader className='ion-no-border'>
                <IonToolbar>
                    <div className="flex justify-center flex-col items-center py-10 min-h-[20vh] gap-y-1">
                        <img src="/assets/avatar.svg" className='w-20' alt="" />
                        <h2 className='font-semibold capitalize'>{user?.username}</h2>
                        <div>{user?.email}</div>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonLoading isOpen={loading} onDidDismiss={() => setLoading(false)} message={"Logging out User!"}></IonLoading>
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
                        {
                            Object.keys(securityPages).map((key, index) => {
                                const page = (securityPages as any)[key] as typeof securityPages.setPin;
                                if (!page.name) return;
                                return <IonMenuToggle>
                                    <IonItem routerLink={page.url} lines='none' button>
                                        <IonLabel>{page.name}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            })
                        }
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
                            <IonLabel color={'danger'} onClick={logoutApp}>Logout</IonLabel>
                        </IonItem>
                    </IonList>
                </div>

            </IonContent>
        </IonMenu>
    )
}

export default MainMenu