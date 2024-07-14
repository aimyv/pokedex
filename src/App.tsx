import styled from 'styled-components';
import useFetchPokemon from './hooks/useFetchPokemon';
import SelectPokemon from './components/SelectPokemon';
import PokemonGrid from './components/PokemonGrid';
import { CircularProgress } from '@mui/material';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const LoadingMessage = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

export default function App() {
    const { setSortBy, sortedPokemonData, isFetching, isError } = useFetchPokemon()

    return (
        <div className="App">
            <Header>
                <img id='pokeball' src='/header.png' alt='Pokéball' width={40} height={40} />
                <h2>Who's that pokémon?</h2>
            </Header>
            <SelectPokemon setSortBy={setSortBy} />
            {isFetching && (<LoadingMessage>
                <CircularProgress color='error' size={16} />
                <p>Fetching pokémon...</p>
            </LoadingMessage>)}
            {isError && <p>Oops, failed to fetch!</p>}
            {sortedPokemonData && <PokemonGrid sortedPokemonData={sortedPokemonData} />}
        </div>
    );
}
