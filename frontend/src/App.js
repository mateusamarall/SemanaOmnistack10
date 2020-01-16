import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
//componente: Bloco isolado  de html, css e js, o qual nao interfere  no restante da aplicação
//proprieade: informações  que um  componente  pai passa para o componente filho
//Estado: informações  mantidas pelo componente (lembrar: imutaveis)

function App() {
	const [devs, setDevs] = useState([]);
	useEffect(() => {
		async function LoadDevs() {
			const response = await api.get('/devs');

			setDevs(response.data);
		}
		LoadDevs();
	});

	async function handleAddDev(data) {
		const response = await api.post('/devs', data);

		setDevs([...devs, response.data]);
	}
	return (
		<div id='app'>
			<aside>
				<strong>Cadastrar</strong>
				<DevForm onSubmit={handleAddDev} />
			</aside>
			<main>
				<ul>
					{devs.map((dev) => (
						<DevItem key={dev._id} dev={dev} />
					))}
				</ul>
			</main>
		</div>
	);
}

export default App;
