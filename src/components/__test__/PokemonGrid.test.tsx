import { render, screen } from '@testing-library/react';
import PokemonGrid from '../PokemonGrid';

const dummyPokemonData = [
    {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        cardNumber: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        types: ['grass', 'poison']
    },
    {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
        cardNumber: 2,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        types: ['grass', 'poison']
    },
    {
        name: 'Venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
        cardNumber: 3,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        types: ['grass', 'poison']
    },
    {   
        name: 'Abra', 
        url: 'https://pokeapi.co/api/v2/pokemon/63/', 
        cardNumber: 63,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        types: ['psychic']
    },
];

jest.mock('../../api', () => ({
    fetchPokemon: () => Promise.resolve(dummyPokemonData),
}));

describe('Pokemon Grid', () => {
    test('renders a list of Pokemon cards', async () => {
        render(<PokemonGrid sortedPokemonData={dummyPokemonData} />);
        const pokemonCards = await screen.findAllByTestId('pokemon-card');
        expect(pokemonCards).toHaveLength(dummyPokemonData.length);
    });

    test("renders the list of Pokemon cards in the order of the cards' release numbers by default", async () => {
        render(<PokemonGrid sortedPokemonData={dummyPokemonData} />);
        const pokemonCards = await screen.findAllByTestId('pokemon-card-name');
        pokemonCards.forEach((card, index) => {
            expect(card.textContent).toBe(dummyPokemonData[index].name);
        });
    });
});
