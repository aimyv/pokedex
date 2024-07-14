import React, { ChangeEvent, SetStateAction } from 'react';

interface Props {
    setSortBy: SetStateAction<any>
}

const SelectPokemon: React.FC<Props> = ({
    setSortBy
}) => {

    // sets sorting criteria based on user selection
    function handleChange(e: ChangeEvent<HTMLSelectElement>): void {
        setSortBy(e.target.value);
    }

    return (
        <select onChange={handleChange}>
            <option value="release">Release number</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
        </select>
    )
}

export default SelectPokemon;