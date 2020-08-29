import React from 'react';

function Login(props) {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasaccount,
		setHasAccount,
		emailerror,
		passerror,
	} = props;
	console.log(email, password);
	return (
		<section className="login">
			<div className="loginContainer">
				<label>Username</label>
				<input
					type="text"
					autofocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailerror}</p>
				<label>Password</label>
				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{passerror}</p>
				<div className="btnContainer">
					{hasaccount ? (
						<>
							<button onClick={handleLogin}>Sign in</button>
							<p>
								Don't have an Account?
								<span onClick={() => setHasAccount(!hasaccount)}>Sign up</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSignup}>Sign up</button>
							<p>
								Have an account ?
								<span onClick={() => setHasAccount(!hasaccount)}>Sign in</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default Login;
