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
