import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const guestList = [
  "Umma",
  "Farah",
  "Daffa (Pacar Farah)",
  "Dodi",
  "Aliyka",
  "Tante Erna",
  "Khalid",
  "Alin",
  "Tante Sinta",
  "Nando",
  "Kiona",
  "Tante Yani",
  "Mauwo",
  "Tante Ratna",
  "Om Hendri",
  "Conan",
  "Eyang Mayra",
  "Lek Dar",
  "Bang Reska",
  "Ardi",
  "Affa",
  "Ghava",
  "Nina",
  "Rais (Suami Nina)",
  "Shaby (Anak Nina)",
  "Lala (Adik Nina)",
  "Pacar Lala",
  "Pita",
  "Suami Pita",
  "Mama Pita",
  "Quinzha",
  "Raja",
  "Mutia",
  "Mama Mutia",
  "Arra",
  "Mama Arra",
  "Nizar",
  "Riana",
  "Arip",
  "Rey",
  "Yayah",
  "Inayah",
  "Desi",
  "Naura",
  "Icha",
  "Suami Icha",
  "Dennis",
  "Elin",
  "Wahyu (Suami Elin)",
  "Wildan",
  "Ibu Haji",
  "Ibu Umi",
  "Mba Wik",
  "Om Auk",
];
const data = {
  guestList: guestList,
  guestCount: guestList.length,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", data);
});

app.get("/work", (req, res) => {
  res.render("work.ejs", data);
});

app.post("/", (req, res) => {
  const { newItem } = req.body;
  guestList.push(newItem);
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
