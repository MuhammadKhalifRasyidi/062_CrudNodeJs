import express, { Router } from "express";

const router = express.Router();

const buku = [
    {
    judul: "The Power of Money",
    genre: "Economic & Buseniss",
    penulis: "Jeko El Capitano",
    tahun: 1966,
    },
    {
    judul: "Maling Kuyang",
    genre: "Serius Game",
    penulis: "Ayam Brazilionale",
    tahun: 1966,
    }
];

router.get("/", (req, res) => {
    res.send(buku);
});

export default router; 

router.post('/', (req, res) => {
    const newTodos = {
        id: todos.lenght + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({message: 'Buku tidak ditemkan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0]; //menghapus dan menyimpan todo yang di hapus
    res.status(200).json({ message: `Buku '${deletedTodo.task}' telah dihapus` });
});

router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Buku tidak ditemukan' });

    res.status(200).json({
        message: `Buku dengan ID ${todo.id} telah diperbarui`,
        updatedTodo: todo
    });
});