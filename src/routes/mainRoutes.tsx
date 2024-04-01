import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { pieChartOutline, homeOutline, chatboxEllipsesOutline, timeOutline } from 'ionicons/icons'
import { Route, Redirect } from 'react-router'
import HomePage from '../pages/main/HomePage'
import MainMenu from '../components/menu/MainMenu'
import FeedPage from '../pages/main/FeedPage'
import FeedDetail from '../pages/main/FeedDetail'
import HistoryPage from '../pages/main/HistoryPage'
import AssetsPage from '../pages/main/AssetsPage'

const MainRoutes = () => {
    return (
        <>
            <MainMenu />
            <IonTabs>
                <IonRouterOutlet id='main-menu-content'>
                    {
                        (Object.values(mainPages) as { url: string, page: () => JSX.Element }[]).map((route, index) => {
                            return (
                                <Route exact path={route.url} component={route.page} />
                            )
                        })
                    }

                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon aria-hidden="true" icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="asset" href={mainPages.assets.url}>
                        <IonIcon aria-hidden="true" icon={pieChartOutline} />
                        <IonLabel>Assets</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="feed" href={mainPages.feed.url}>
                        <IonIcon aria-hidden="true" icon={chatboxEllipsesOutline} />
                        <IonLabel>Feed</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="history" href="/history">
                        <IonIcon aria-hidden="true" icon={timeOutline} />
                        <IonLabel>History</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </>

    )
}

export default MainRoutes


export const mainPages = {
    home: {
        name: "Home",
        url: "/home",
        page: HomePage
    },

    assets: {
        name: "Assets",
        url: "/assets",
        page: AssetsPage
    },
    feed: {
        name: "Feed",
        url: "/feed",
        page: FeedPage
    },
    feedDetail: {
        name: "Feed Detail",
        url: "/feed/:id",
        page: FeedDetail
    },
    history: {
        name: "History",
        url: "/history",
        page: HistoryPage
    },
    // notFound: {
    //     name: "Not Found",
    //     url: "/*",
    //     page: HomePage
    // }

}