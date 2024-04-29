import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NewPage from './pages/NewPage';
import MainRoutes from './routes/mainRoutes';
import AuthRoutes from './routes/authRoutes';
import MainMenu from './components/menu/MainMenu';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';
import { configureAxios } from './utils';
import { useEffect } from 'react';
import { decryptData } from './utils/encryption';

setupIonicReact();
configureAxios()

const App: React.FC = () => {

  const user = useSelector(selectUser)
  const authenticatedUser = !!user?.email ? true : false;

  return (
    <IonApp>

      <IonReactRouter>

        {
          authenticatedUser ? <MainRoutes /> : <AuthRoutes />
        }
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
