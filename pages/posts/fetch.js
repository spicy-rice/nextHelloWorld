import React, { useState, useEffect } from "react";
const axios = require("axios");
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

export default function Fetch() {
  //Comic();
  PokemonViewer;
  return <h1>Fetch</h1>;
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

function PokemonViewer({ pokemonId }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (pokemon) {
      async function getPokemon() {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setPokemon(data);
        console.log(data.sprites.front_default);
      }
      getPokemon();
    }
  }, [pokemonId]);
}
