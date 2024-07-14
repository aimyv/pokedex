import { sortPokemon, convertTo3Digits } from '../helpers';

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

const dummyPokemonDataAZ = [
    {   
        name: 'Abra', 
        url: 'https://pokeapi.co/api/v2/pokemon/63/', 
        cardNumber: 63,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
        types: ['psychic']
    },
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
];

describe('sorting functionality', () => {
    test("sorts pokemon by release", async () => {
        const pokemon = sortPokemon('release', dummyPokemonData);
        expect(pokemon).toStrictEqual(dummyPokemonData);
    });
    test("sorts pokemon from A - Z", async () => {
        const pokemon = sortPokemon('az', dummyPokemonData);
        expect(pokemon).toStrictEqual(dummyPokemonDataAZ);
    });
    test("sorts pokemon from Z - A", async () => {
        const pokemon = sortPokemon('za', dummyPokemonData);
        expect(pokemon).toStrictEqual(dummyPokemonDataAZ.reverse());
    });
});

describe('converting to 3 digits', () => {
    test("lowest number, single digit - 1", async () => {
        const digitString = convertTo3Digits(1);
        expect(digitString).toBe('001');
    });
    test("single digit - 9", async () => {
        const digitString = convertTo3Digits(9);
        expect(digitString).toBe('009');
    });
    test("double digits - 10", async () => {
        const digitString = convertTo3Digits(10);
        expect(digitString).toBe('010');
    });
    test("double digits - 99", async () => {
        const digitString = convertTo3Digits(99);
        expect(digitString).toBe('099');
    });
    test("triple digits - 100", async () => {
        const digitString = convertTo3Digits(100);
        expect(digitString).toBe('100');
    });
    test("triple digits - 101", async () => {
        const digitString = convertTo3Digits(101);
        expect(digitString).toBe('101');
    });
    test("highest number, triple digits - 151", async () => {
        const digitString = convertTo3Digits(151);
        expect(digitString).toBe('151');
    });
})