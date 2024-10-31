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