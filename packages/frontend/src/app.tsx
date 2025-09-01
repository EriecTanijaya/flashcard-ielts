import { useState } from "react";

export function App() {
	const [answer, setAnswer] = useState("");

	function checkAnswer() {
		/**
		 * todo:
		 *
		 * - add validation to only input the string
		 * - make all the string lowercased
		 * - make the button disabled first if the answer is still empty
		 */

		if (!answer) {
		}
	}

	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-400 p-4">Header</header>
			<main className="flex flex-col p-4 grow space-y-2 justify-center">
				<h1 className="text-center font-bold">Synonym & Antonym Challenge</h1>
				<p className="text-center">
					Improve your IELTS vocabulary by identifying synonyms and antonyms.
				</p>
				<div className="flex flex-row bg-gray-400 rounded-md p-2 justify-around w-full">
					<div className="flex flex-col text-center space-y-1">
						<div className="font-semibold">Score</div>
						<div>0</div>
					</div>
					<div className="flex flex-col text-center space-y-1">
						<div className="font-semibold">Target</div>
						<div>Antonym</div>
					</div>
				</div>
				<h2 className="text-4xl antialiased md:subpixel-antialiased my-5 text-center font-extrabold font-vend">
					comprehensive
				</h2>
				<p className="text-center">
					Enter a word that is <b>Antonym</b> of the word above.
				</p>
				<input
					className="placeholder:text-gray-700 border-solid border rounded-md p-3 w-full text-center focus:outline-hidden focus:border-2"
					placeholder="Type your answer here.."
					onChange={(e) => setAnswer(e.target.value)}
				/>
				<button
					type="button"
					className="rounded-md bg-gray-400 px-5 py-2 focus:outline-2 focus:outline-offset-2 font-semibold text-sm w-full"
					onClick={() => checkAnswer()}
				>
					Check Answer
				</button>
			</main>
			<footer className="bg-gray-400 p-4">Footer</footer>
		</div>
	);
}
