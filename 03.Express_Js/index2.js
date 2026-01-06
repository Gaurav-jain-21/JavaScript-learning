import express from "express";
const app = express();

const cb1 = (req, res, next) => {
    console.log("First callback");
    next();
};

const cb2 = (req, res, next) => {
    console.log("Second callback");
    next();
};

app.get(
    "/crazyness",
    [cb1, cb2],
    (req, res, next) => {
        console.log("Third callback");
        next();
    },
    (req, res) => {
        console.log("Fourth callback");
        res.send("Crazyness");
    }
);

app.listen(8000, () => console.log("Server started"));
