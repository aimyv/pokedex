import { PokemonItem } from "../types/PokemonItem";

export const fetchPokemon = async (): Promise<PokemonItem[]> =>
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => data.results);

export const getPokemonTypes = async (id: number) =>
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => data.types.map((typeInfo: any) => typeInfo.type.name));

