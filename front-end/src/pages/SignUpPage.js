import { useState  } from "react"
import { useHistory } from "react-router-dom"


export const SignUpPage = () => {
    const [errorMesage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const history = useHistory();

    const onSignUpClicked = async () => {
        console.log('onSignUpClicked is not implemented');
    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMesage && <div className="fail">{errorMesage}</div>}
            <input placeholder="someone@gmail.com" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
            <input placeholder="password" type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)}/>
            <input placeholder="password" type="password" value={confirmPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)}/>
            <hr/>
            <button disabled={!emailValue || !passwordValue || passwordValue !== confirmPasswordValue} onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={() => history.push('/login')}>Already have an account? Log In</button>
        </div>
    )
}
