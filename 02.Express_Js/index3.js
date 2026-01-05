import express from "express";

const app = express();

app.get("/product/iphone", (req, res) => {
    res.send("this code will only run if you provide /product/iphone");
});

app.get("/single-cb", (req, res) => {
    res.send("Single Callback");
});

app.get(
    "/double-cb",
    (req, res, next) => {
        console.log("first callback");
        next(); // move to next callback
    },
    (req, res) => {
        res.send("we dont talk");
    }
);

app.listen(8000, () => console.log("server up"));
