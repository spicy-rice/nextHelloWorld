import React, { useState, useEffect } from "react";

export default function Fetch() {
  Comic();
  return <h1>Fetch</h1>;
}

function Comic() {
  const [comicCharacter, setComicCharacter] = useState({});
  useEffect(() => {
    if (comicCharacter) {
      async function getComicCharacter() {
        const res = await fetch(
          `https://comicvine.gamespot.com:/character/id`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setComicCharacter(data);
      }
      getComicCharacter();
    }
  }, []);
}
