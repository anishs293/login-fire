import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './fire';
import Login from './login';
import Hero from './Hero';

function App() {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailerror, setEmailError] = useState('');
	const [passerror, setPassError] = useState('');
	const [hasaccount, setHasAccount] = useState(false);

	const clearInputs = () => {
		setEmail('');
		setPassword('');
	};

	const clearErrors = () => {
		setEmailError('');
		setPassError('');
	};

	const handleLogin = () => {
		clearErrors();
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case 'auth/invalid-email':
					case 'auth/user-disabled':
					case 'auth/user-not-found':
						setEmailError(err.message);
						break;
					case 'auth/wrong-password':
						setPassError(err.message);
						break;
					//else return {}
				}
			});
	};

	const handleSignup = () => {
		clearErrors();
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case 'auth/email-already-in-use':
					case 'auth/invalid-email':
						setEmailError(err.message);
						break;
					case 'auth/weak-password':
						setPassError(err.message);
						break;
					//else return {}
				}
			});
	};

	const handleLogout = () => {
		fire.auth().signOut();
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser('');
			}
		});
	};

	useEffect(() => {
		authListener();
	}, []);

	return (
		<div className="App">
			{user ? (
				<Hero handleLogout={handleLogout} />
			) : (
				<Login
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
					handleSignup={handleSignup}
					hasaccount={hasaccount}
					setHasAccount={setHasAccount}
					emailerror={emailerror}
					passerror={passerror}
				/>
			)}
		</div>
	);
}

export default App;
