const express = require("express");

const cors = require("cors");

const colors = require("colors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Test get");
});

app.listen(4000, () =>
	console.log(
		colors.yellow.bold(`🚀 Server is running on`),
		colors.yellow.underline(`http://localhost:4000`)
	)
);
