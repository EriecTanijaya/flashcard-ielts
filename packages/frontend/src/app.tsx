export function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-400 p-4">Header</header>
			<main className="p-4 grow space-y-2">
				<h1 className="text-center font-bold">Synonym & Antonym Challenge</h1>
				<p>
					Improve your IELTS vocabulary by identifying synonyms and antonyms.
				</p>
				<div className="flex flex-row bg-gray-400 rounded-md p-2">
					<div className="flex flex-col flex-auto text-center space-y-1">
						<div className="font-semibold">Score</div>
						<div>0</div>
					</div>
					<div className="flex flex-col flex-auto text-center space-y-1">
						<div className="font-semibold">Target</div>
						<div>Antonym</div>
					</div>
				</div>
				<div>
					<h2>comprehensive</h2>
				</div>
			</main>
			<footer className="bg-gray-400 p-4">Footer</footer>
		</div>
	);
}
