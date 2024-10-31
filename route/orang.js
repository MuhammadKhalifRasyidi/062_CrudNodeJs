import express, { Router } from "express";

const router = express.Router();

const orang = [
    {
    nama: "Bopeng88",
    negara: "Huiheho",
    kelebihan: "Syndrom Bakkaaaaa",
    jenis: "Musang Ijo",
    },
    {
    nama: "Tunggu Kiris",
    negara: "71% Jepang",
    kelebihan: "Elzio Liat Mana",
    jenis: "Jempol Kaki",
    }
];

router.get("/", (req, res) => {
    res.send(orang);
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
    if (todoIndex === -1) return res.status(404).json({message: 'Orang tidak ditemkan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0]; //menghapus dan menyimpan todo yang di hapus
    res.status(200).json({ message: `Orang '${deletedTodo.task}' telah dihapus` });
});

router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Orang tidak ditemukan' });

    res.status(200).json({
        message: `Orang dengan ID ${todo.id} telah diperbarui`,
        updatedTodo: todo
    });
});