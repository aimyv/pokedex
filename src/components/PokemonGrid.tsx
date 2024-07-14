import React from 'react';
import '../App.css';
import { PokemonItem } from "../types/PokemonItem";
import { convertTo3Digits } from '../utils/helpers';
import Chip from '../ui/Chip';

interface Props {
    sortedPokemonData: PokemonItem[]
}

const PokemonGrid: React.FC<Props> = ({
    sortedPokemonData
}) => {
    return (
        <div className="pokemon-grid">
                {sortedPokemonData?.map((pokemon: PokemonItem) => (
                    <div key={pokemon.name} className="pokemon-card" data-testid="pokemon-card">
                        <div className='pokemon-main' data-testid='pokemon-main'>
                            <img
                                className="pokemon-card-sprite"
                                alt={pokemon.name}
                                src={pokemon.sprite}
                            />
                            <div className="pokemon-card-text-container">
                                <span className="pokemon-card-name" data-testid="pokemon-card-name">
                                    {pokemon.name}
                                </span>
                                <span className="pokemon-card-number" data-testid="pokemon-card-number">
                                    {convertTo3Digits(pokemon.cardNumber)}
                                </span>
                            </div>
                        </div>
                        <div className="pokemon-types" data-testid="pokemon-types">
                            {pokemon?.types?.map(type => (
                                <Chip key={type} variant={type}>{type}</Chip>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default PokemonGrid;