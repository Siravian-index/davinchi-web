// src/App.tsx

import "./App.css";

function App() {
	return (
		<div className="coming-soon-container">
			<div className="coming-soon-card">
				<div className="badge">En desarrollo</div>
				<h1>Próximamente</h1>
				<p className="subtitle">
					Estamos trabajando en algo increíble. Vuelve pronto.
				</p>
				<div className="divider" />
				<p className="footer-text">
					© {new Date().getFullYear()} — Todos los derechos reservados
				</p>
			</div>
		</div>
	);
}

export default App;
