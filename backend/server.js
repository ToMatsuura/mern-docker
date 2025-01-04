const express = require("express")
const app = express();
const PORT = 5005;

app.get("/", (req, res) => {
    res.status("nodeとviteでcomposeの試験中!")
})

app.listen(PORT, () => {
    res.send("Server is Runnnig");
})