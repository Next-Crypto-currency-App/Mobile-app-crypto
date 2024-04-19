import { IonPage, IonContent, IonInput, IonCheckbox, IonButton } from "@ionic/react";
import { useState } from "react";
import AppProgressHeader from "../../components/@/AppProgressHeader";
import { authPages } from "../../routes/authRoutes";
import AppButtonText from "../../components/@/AppButtonText";
import { useHistory } from "react-router";
import AppPasswordInput from "../../components/@/AppPasswordInput";
import { useAuth } from "../../hooks/useAuth";

const SignupPage = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const { createUser } = useAuth()

    // Form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const user = {
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "suspended": false,
            "ip_address": "0.0.0.0",
            "location": "Cameroon, Douala",
            "longitude": "682346234",
            "latitude": "682346234"
        }

        setLoading(true);

        const result = await createUser(user)
        if (result) {
            history.push(authPages.verifyEmail.url)
        }
        setLoading(false)

    };


    return (
        <IonPage>
            <AppProgressHeader value={1} total={2} />
            <IonContent className='ion-padding space-y-10'>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div>
                        <label>Username</label>
                        <IonInput
                            fill='outline'
                            required
                            className='border rounded-md ion-padding-horizontal'
                            value={name}
                            onIonInput={(e) => setName(e.target.value as string)}
                        />
                    </div>
                    <div>
                        <label>Name</label>
                        <IonInput
                            fill='outline'
                            required
                            className='border rounded-md ion-padding-horizontal'
                            value={username}
                            onIonInput={(e) => setUsername(e.target.value as string)}
                        />
                    </div>
                    <div>
                        <label>Email address</label>
                        <IonInput
                            fill='outline'
                            required
                            type="email"
                            className='border rounded-md ion-padding-horizontal'
                            value={email}
                            onIonInput={(e) => setEmail(e.target.value as string)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <AppPasswordInput
                            value={password}
                            onChange={(value) => setPassword(value as string)}
                        />
                    </div>
                    <div className='flex gap-x-2 text-sm pt-1'>
                        <IonCheckbox
                            slot='start'
                            checked={isChecked}
                            onIonChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <div>
                            I certify that I am 18 years old or older, I agree to the User Agreement, and I have read the Privacy Policy.
                        </div>
                    </div>
                    <div className="pt-3">
                        <IonButton type="submit" expand='block'>
                            <AppButtonText loading={loading}>Create Account</AppButtonText>
                        </IonButton>
                    </div>
                </form>

            </IonContent>
        </IonPage>
    );
};

export default SignupPage;