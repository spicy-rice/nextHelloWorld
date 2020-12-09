import React, { useState, useEffect } from "react";
const axios = require("axios");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

export default function Fetch() {
  const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState({});

  async function getPokemon() {
    const res = await fetch(pokemonUrl);
    console.log(res);
    const data = await res.json();
    console.log(data);
    console.log(data.results[3].name);
    setPokemon(data.results[3].name);
  }

  return (
    <div>
      <div>
        <h1>Fetch</h1>;
      </div>

      <button onClick={getPokemon}> Pokemon </button>
      <p>{pokemon}</p>
    </div>
  );
}

// function Comic() {
//   const [comicCharacter, setComicCharacter] = useState({});
//   useEffect(() => {
//     if (comicCharacter) {
//       async function getComicCharacter() {
//         const res = await fetch(
//           `https://superheroapi.com/api/10224929409602023/id`,
//           {
//             headers: { accept: "application/json" },
//           }
//         );
//         const data = await res.json();
//         console.log(data);
//         setComicCharacter(data);
//       }
//       getComicCharacter();
//     }
//   }, []);
// }
