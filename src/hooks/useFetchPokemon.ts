import { useState, useEffect, useMemo } from 'react';
import { fetchPokemon, getPokemonTypes } from '../api';
import { PokemonItem } from '../types/PokemonItem';
import { sortPokemon } from '../utils/helpers';

function useFetchPokemon() {
    const [pokemonData, setPokemonData] = useState<PokemonItem[] | null>(null); // fetched data
    const [sortBy, setSortBy] = useState<string>('release'); // sorting criteria
    const [isFetching, setIsFetching] = useState<boolean>(true); // loading state
    const [isError, setIsError] = useState<boolean | null>(null); // error state

    async function fetchAll() {
        try {
            const results = await fetchPokemon()
            const pokemon: PokemonItem[] = await Promise.all(results?.map(async (poke: PokemonItem, index: number) => { 
                return {
                    ...poke, // sets name and url from api
                    cardNumber: index + 1, // sets cardNumber based on index
                    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`, // sets image based on index
                    types: await getPokemonTypes(index + 1), // sets types based on index
                }
            }))
            setPokemonData(pokemon);
            setIsError(false);
        } catch(error: unknown) {
            setIsError(true);
            console.error(error);
        } finally {
            setIsFetching(false);
        }
    }

    // fetches data from api on mount only
    useEffect(() => {
        fetchAll()
    }, []);

    // sorts fetched pokemon data based on sorting criteria
    const sortedPokemonData = useMemo(() => {
        if (pokemonData) {
            return sortPokemon(sortBy, pokemonData);
        }
        return null;
    }, [sortBy, pokemonData]);

    return {
        sortedPokemonData,
        setSortBy,
        isFetching,
        isError
    }
}

export default useFetchPokemon;