//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var enteredPassword = "";

app.use(bodyParser.urlencoded({ extended: true }));

function passwordGetter(req, res, next) {
    console.log(req.body);
    enteredPassword = req.body["password"];
    next();
}

app.use(passwordGetter);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// if (enteredPassword === "ILoveProgramming") {
//     app.post("/check", (req, res) => {
//         res.sendFile(__dirname + "/public/secrets.html");
//     });
// }
// else {
//     app.post("/check", (req, res) => {
//         res.sendFile(__dirname + "/public/index.html");
//     });
// }

app.post("/check", (req, res) => {
    if (enteredPassword === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/")

    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});