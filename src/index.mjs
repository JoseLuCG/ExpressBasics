import express from "express";

const PATH_PREFIX = "/api/v0.0"
const app = express();
const jsonParser = express.json();
const tasks = [];

app.get(PATH_PREFIX+"/tasks/", (request, response) => {
    response.json(tasks)
});

app.post(PATH_PREFIX+"/task/", jsonParser, (request, response) => {
    try {
        tasks.push(request.body);
        response.sendStatus(201);
    } catch (err) {
        console.error(err);
        response.sendStatus(500);
    }
});

app.put(PATH_PREFIX+"/task/", jsonParser, (request, response) => {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
});

app.delete(PATH_PREFIX+"/task/", jsonParser, (request, response) => {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200)
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("Express running...");
});
