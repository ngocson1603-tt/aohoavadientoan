const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router
    .post("/add/todo", (req, res) => {
        const { todo } = req.body;
        const { ms } = req.body;
        const { ten } = req.body;
        const { hinh } = req.body;
        const newTodo = new Todo({ todo, ms, ten, hinh });

        // save the todo
        newTodo
            .save()
            .then(() => {
                console.log("Successfully added todo!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    })

    .get("/delete/todo/:_id", (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
            .then(() => {
                console.log("Deleted Todo Successfully!");
                res.redirect("/");
            })
            .catch((err) => console.log(err));
    });

module.exports = router;
