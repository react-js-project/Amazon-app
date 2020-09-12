import React,{useState} from 'react'
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase'

const Login = () => {

    const history = useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const signIn=(e)=>{
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email,password)
            .then( (auth) => {
                history.push('/');
            })
            .catch(error=>{
                alert(error.massage)
            })
    }

    const register=(e)=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push('/');
                }
            })
            .catch(error=>{
                alert(error.massage)
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login-logo" src="https://economictranscript.files.wordpress.com/2019/09/amazon-625x352.jpg" />
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>{
                        setemail(e.target.value)
                    }} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>{
                        setpassword(e.target.value)
                    }} />

                    <button type="submit" onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                </p>
                <button className="login-registerbutton" onClick={register}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
