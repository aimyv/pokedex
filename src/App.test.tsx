import { render, screen } from '@testing-library/react';
import App from './App';

const dummyPokemonData = [
    {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
        name: 'Venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {   
        name: 'Abra', 
        url: 'https://pokeapi.co/api/v2/pokemon/63/' 
    },
];

jest.mock('./api', () => ({
    fetchPokemon: () => Promise.resolve(dummyPokemonData),
}));

describe('Pokemon App', () => {
    test("renders 'Pokemon' as a title", () => {
        render(<App />);
        const titleElement = screen.getByText('Pokemon');
        expect(titleElement).toBeInTheDocument();
    });
});
