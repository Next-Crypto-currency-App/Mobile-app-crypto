import { IonPage, IonContent, IonInput, IonCheckbox, IonButton } from "@ionic/react";
import { useState } from "react";
import AppProgressHeader from "../../components/@/AppProgressHeader";
import { authPages } from "../../routes/authRoutes";
import { useDispatch } from "react-redux";
import AppButtonText from "../../components/@/AppButtonText";
import { setUserState } from "../../redux/userSlice";
import { useHistory } from "react-router";

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory()

    // Form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email
        }

        console.log(user)

        setLoading(true)

        setTimeout(() => {
            dispatch(setUserState(user))
            history.push(authPages.verifyEmail.url)
            setLoading(false)
        }, 3000);



    };



    return (
        <IonPage>
            <AppProgressHeader value={1} total={3} />
            <IonContent className='ion-padding space-y-10'>
                <form onSubmit={handleSubmit} className='space-y-3'>
                    <div>
                        <label>First Name</label>
                        <IonInput
                            fill='outline'
                            required
                            className='border rounded-md ion-padding-horizontal'
                            value={firstName}
                            onIonInput={(e) => setFirstName(e.target.value as string)}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <IonInput
                            fill='outline'
                            required
                            className='border rounded-md ion-padding-horizontal'
                            value={lastName}
                            onIonInput={(e) => setLastName(e.target.value as string)}
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
                    <p className='flex gap-x-2 text-sm pt-1'>
                        <IonCheckbox
                            slot='start'
                            checked={isChecked}
                            onIonChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <p>
                            I certify that I am 18 years old or older, I agree to the User Agreement, and I have read the Privacy Policy.
                        </p>
                    </p>
                    <div className="pt-3">
                        <IonButton type="submit" expand='block' onClick={handleSubmit}>
                            <AppButtonText loading={loading}>Create Account</AppButtonText>
                        </IonButton>
                    </div>
                </form>

            </IonContent>
        </IonPage>
    );
};

export default SignupPage;