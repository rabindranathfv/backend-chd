const express = require("express");

const PORT = 5000;
const API_BASE_PATH = "/api";
const initialPhrase = "Frase inicial";

let phrase = initialPhrase.toLocaleLowerCase();

const app = express();

app.use(express.json()); // transforme el body y lo podamos usar en req.body
app.use(express.urlencoded({ extended: true })); // procesar req.body y los req.query

app.get(`${API_BASE_PATH}/frase`, (req, res) => {
  res.json({ ok: true, message: `Frase actual`, phrase: phrase });
});

app.get(`${API_BASE_PATH}/palabras/:pos`, (req, res) => {
  const wordPosition = req.params.pos;

  if (isNaN(wordPosition)) {
    return res.status(400).json({
      ok: false,
      message: `la posicion ingresada es invalida ${wordPosition}`,
    });
  }

  const position = Number(wordPosition);
  const words = phrase.split(" ");

  if (position <= 0 || position > words.length) {
    return res
      .status(400)
      .json({ ok: false, message: `posicion fuera del rango de la frase` });
  }

  res.json({
    ok: true,
    message: `palabra encontrada en la posicion ${position}`,
    search: words[position - 1],
  });
});

app.post(`${API_BASE_PATH}/palabras`, (req, res) => {
  const { palabra } = req.body;
  phrase = phrase + ` ${palabra}`;

  return res.json({
    ok: true,
    message: `la palabra agregada es ${palabra}`,
    word: palabra,
    pos: phrase.split(" ").length,
  });
});

app.put(`${API_BASE_PATH}/palabras/:pos`, (req, res) => {
  const wordPosition = req.params.pos
  const { palabra } = req.body;

  if (isNaN(wordPosition)) {
    return res.status(400).json({
      ok: false,
      message: `la posicion ingresada es invalida ${wordPosition}`,
      pos: wordPosition,
    });
  }

  const position = Number(wordPosition);
  const listWords = phrase.split(" ");

  if (position <= 0 || position > listWords.length) {
    return res
      .status(400)
      .json({ ok: false, message: `posicion fuera del rango de la frase` });
  }

  const afterWord = listWords[position - 1] // la palabra antes de actualizarla
  listWords[position - 1] = palabra // busco la posicion de la palabra y actualizo la palabra con el nuevo contenido
  phrase = listWords.join(" "); // reconstruyo la frase

  res.json({ ok: true, message: ``, wordUpdated: palabra, afterWord });
});

app.delete(`${API_BASE_PATH}/palabras/:pos`, (req, res) => {
  const wordPosition = req.params.pos;

  if (isNaN(wordPosition)) {
    return res.status(400).json({
      ok: false,
      message: `la posicion ingresada es invalida ${wordPosition}`,
      pos: wordPosition,
    });
  }

  const position = Number(wordPosition);
  const listWords = phrase.split(" ");

  if (position <= 0 || position > listWords.length) {
    return res
      .status(400)
      .json({ ok: false, message: `posicion fuera del rango de la frase` });
  }

  const deleteWord = listWords[position - 1]; // obtenemos la palabra a eliminar
  listWords.splice(position - 1, 1);

  phrase = listWords.join(" ");

  return res.json({
    ok: true,
    message: `se elimino la posicion ${position} exitosamente`,
    delete: deleteWord,
    phrase: phrase,
  });
});

app.listen(PORT, () => {
  console.log(`API RUNNING`);
});
