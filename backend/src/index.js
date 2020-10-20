const express = require("express");
const cors = require("cors");

const app = express();

/**
app.use(
	cors({
		origin: "http://localhost:8080", // ! Permite a conxao apenas da origem http://localhost:8080
	})
);
*/
app.use(cors()); // * Permite qualquer conexao

app.use(express.json());

const projects = [{ name: "Novo Projeto" }];

app.get("/projects", (req, res) => {
	return res.json(projects);
});

app.post("/projects/:name", (req, res) => {
	const { name } = req.params;
	projects.push({ name });
	return res.json(name);
});

app.listen(3333, () => {
	console.log("✔ Back-end started! ✔");
});
