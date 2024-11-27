const express = requre("express");

const app = express();

app.gef("/",(req,res)=>
{
    res.json({
        message: "Hello World!",

    });
});

app.listen(5050, ()=>console.log("Listening on http://localhost:5050"));
