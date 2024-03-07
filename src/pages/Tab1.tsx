import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { logoWhatsapp } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crypto App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <div className="" style={{ padding: "10px" }}>
          <IonInput label='Name' labelPlacement='floating' fill='outline' />
        </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
