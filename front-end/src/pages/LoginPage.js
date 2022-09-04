import { useState  } from "react"
import { useHistory } from "react-router-dom"


export const LoginPage = () => {
    const [errorMesage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const onLoginClicked = async () => {
        console.log('login is not implemented');
    }

    return (
        <div className="content-container">
            <h1>Log In</h1>
            { errorMesage && <div className="fail">{errorMesage}</div>  }
            <input placeholder="someone@gmail.com" value={emailValue} onChange={e => setEmailValue(e.target.value)} />
            <input placeholder="password" type="password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)}/>
            <hr/>
            <button disabled={!emailValue || !passwordValue} onClick={onLoginClicked}>Log In</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot you password?</button>
            <button onClick={() => history.push('/signup')}>Don't have an account? Sign Up</button>
        </div>
    )
}
