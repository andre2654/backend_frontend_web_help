import React, { useState, useEffect } from "react";
import Section from "./components/Header";

import api from "./services/api";

export default function App() {
	const [projects, setProject] = useState([]);

	useEffect(() => {
		api.get("/projects").then((res) => {
			setProject(res.data);
			console.log(res);
		});
	}, []);

	async function handleAddProject() {
		const res = await api.post(`/projects/Novo Projeto ${Date.now()}`);

		setProject([...projects, { name: res.data }]);
	}

	return (
		<>
			{projects.map((project, index) => (
				<Section key={index} title={project.name} />
			))}
			<button onClick={handleAddProject}>Adicionar projeto</button>
		</>
	);
}
