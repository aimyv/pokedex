import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 3px 0;
    border-radius: 7.5px;
    width: 50%;
    margin: 3px;
    &.bug {
        background-color: #dee6dc;
        color: #2b5e21;
    };
    &.dark {
        background-color: #919191;
        color: #404040;
    };
    &.dragon {
        background-color: #add5db;
        color: #307082;
    };
    &.electric {
        background-color: #fcf4c5;
        color: #8a770b;
    };
    &.fairy {
        background-color: #ffe3fc;
        color: #d417be;
    };
    &.fighting {
        background-color: #f5dbc6;
        color: #b86018;
    };
    &.fire {
        background-color: #ffdcd9;
        color: #ad281c;
    };
    &.flying {
        background-color: #e9eef5;
        color: #547196;
    };
    &.ghost {
        background-color: #cac9f5;
        color: #39386b;
    };
    &.grass {
        background-color: #d2edca;
        color: #52634e;
    };
    &.ground {
        background-color: #edd4cc;
        color: #804533;
    };
    &.ice {
        background-color: #e6f7ff;
        color: #0079b3;
    };
    &.normal {
        background-color: #ffe0c4;
        color: #6e4f35;
    };
    &.poison {
        background-color: #eedbff;
        color: #7636ad;
    };
    &.psychic {
        background-color: #fbf2ff;
        color: #ac28e0;
    };
    &.rock {
        background-color: #eddeda;
        color: #522d23;
    };
    &.steel {
        background-color: #ededed;
        color: #4a4a4a;
    };
    &.water {
        background-color: #dee7ff;
        color: #2f4ea3;
    };
`

interface Props {
    variant: string;
    children: React.ReactNode;
}

const Chip: React.FC<Props> = ({
    variant,
    children
}) => {
    return (
        <Container className={variant}>{children}</Container>
    )
}

export default Chip