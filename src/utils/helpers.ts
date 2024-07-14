import { PokemonItem } from "../types/PokemonItem";

export function convertTo3Digits(index: number): string {
    const difference: number = 100 - index;
    if (difference <= 0) {
        return `${index}`; // return triple digit numbers
    } else { 
        if (difference > 90 && difference < 101) {
            return `00${index}`; // prefix single digit numbers with 00
        } else {
            return `0${index}`; // prefix double digit numbers with 0
        } 
    }
}

export function sortPokemon(sortBy: string, pokemon: PokemonItem[]): PokemonItem[] {
    switch (sortBy) {
        case 'az':
            return sortAZ(pokemon);
        case 'za':
            return sortZA(pokemon);
        default:
            return sortRelease(pokemon);
    }
}

function sortRelease(pokemon: PokemonItem[]): PokemonItem[] {
    return pokemon.sort(function (a, b) {
        if (a.cardNumber < b.cardNumber) {
            return -1;
        }
        if (a.cardNumber > b.cardNumber) {
            return 1;
        }
        return 0;
    });
}

function sortAZ(pokemon: PokemonItem[]): PokemonItem[] {
    return pokemon.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

function sortZA(pokemon: PokemonItem[]): PokemonItem[] {
    return pokemon.sort(function (a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}