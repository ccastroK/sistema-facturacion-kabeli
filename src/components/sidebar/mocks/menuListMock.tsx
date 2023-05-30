import { Pokedex } from '@/app/interface/pokeInterface';
import { getAllPoke } from '@/app/infraestructure/services/PokeService';
export const menuItemList: any[] = [
  {
    id: 1,
    name: "Dashboard",
    enabled: true,
    selected: true,
  },
  {
    id: 2,
    name: "Socios",
    enabled: true,
    selected: false,
  },
  {
    id: 3,
    name: "Proyectos",
    enabled: true,
    selected: false,
  },
  {
    id: 4,
    name: "Clientes",
    enabled: true,
    selected: false,
  },
  {
    id: 5,
    name: "Facturacion",
    enabled: true,
    selected: false,
  },
  {
    id: 6,
    name: "Pagos",
    enabled: true,
    selected: false,
  },
];

export async function PokeMenu():any[] {
  const res: Pokedex = await getAllPoke();

  for (let index = 0; index < res.results.length; index++) {
    menuItemList[index].name=res.results[index].name
  }
  return menuItemList;
}