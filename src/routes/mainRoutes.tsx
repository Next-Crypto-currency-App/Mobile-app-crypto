import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { shirtOutline, ellipse, square } from 'ionicons/icons'
import React from 'react'
import { Route, Redirect } from 'react-router'
import NewPage from '../pages/NewPage'
import Tab1 from '../pages/Tab1'
import Tab2 from '../pages/Tab2'
import Tab3 from '../pages/Tab3'

const MainRoutes = () => {
    return (
        <IonTabs>
            <IonRouterOutlet >
                <Route exact path="/tab1">
                    <Tab1 />
                </Route>
                <Route exact path="/new-page">
                    <NewPage />
                </Route>
                <Route exact path="/tab2">
                    <Tab2 />
                </Route>
                <Route path="/tab3">
                    <Tab3 />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab1" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={shirtOutline} />
                    <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon aria-hidden="true" icon={ellipse} />
                    <IonLabel>Tab 2</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tab3">
                    <IonIcon aria-hidden="true" icon={square} />
                    <IonLabel>Tab 3</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default MainRoutes