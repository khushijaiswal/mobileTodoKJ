const { readTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("read/todos", readTodo)
    .post("create/todo", createTodo)
    .put("update/todo/:tid", updateTodo)
    .delete("delete/todo/:tid", deleteTodo)

module.exports = router