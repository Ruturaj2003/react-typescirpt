import { useState } from 'react';

function Component() {
	const [text, setText] = useState('');
	const [email, setEmail] = useState('');

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(e.target.value);
	};
	return (
		<div>
			<h2>Events</h2>
			<form className="form">
				<input
					type="text"
					value={text}
					className="form-input mb-4"
					onChange={(e) => setText(e.target.value)}
				/>{' '}
				<input
					type="email"
					value={email}
					className="form-input mb-4"
					onChange={handleChange}
				/>
				<button
					type="submit"
					className="btn btn-block btn-secondary"
				>
					{' '}
					Submit
				</button>
			</form>
		</div>
	);
}
export default Component;
