import { useState } from 'react';

function Component() {
	const [text, setText] = useState<string[]>([]);
	return (
		<div>
			<h2 className="mb-4">React & Typescript</h2>
			<button
				onClick={() => {
					setText(['asd', 'ffd']);
				}}
				className="btn btn-primary"
			>
				Click me
			</button>
			{text}
		</div>
	);
}
export default Component;
