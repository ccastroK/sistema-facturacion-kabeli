import { useEffect, useState } from "react";
import { getAllPoke } from "../../infraestructure/services/PokeService";
import { Pokedex } from "../../interface/pokeInterface";

async function Dashboard() {
  const res: Pokedex = await getAllPoke();
  return (
    <div>
      <ul>
        {res.results.map((item, key) => (
          <li key={key}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
