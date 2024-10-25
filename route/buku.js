import express, { Router } from "express";

const router = express.Router();

const buku = [
    {
    judul: "The Power Of Money",
    genre: "Economic & Business",
    penulis: "Jeko El Capitano",
    tahun: 1966,
    },
    {
    judul: "Maling Kuyang",
    genre: "Serius Game",
    penulis: "Ayam Brazil",
    tahun: 2998,
    }
];

router.get("/", (req, res) => {
    res.send(buku);
});

export default router;