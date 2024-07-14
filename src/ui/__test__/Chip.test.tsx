import { render, screen } from '@testing-library/react';
import Chip from "../Chip";

describe('Chip', () => {
    test('renders bug type', async () => {
        render(<Chip variant='bug'>bug</Chip>);
        const type = screen.getByText('bug')
        expect(type).toHaveStyle(`
            background-color: #dee6dc;
            color: #2b5e21;
        `);
    });
    test('renders dark type', async () => {
        render(<Chip variant='dark'>dark</Chip>);
        const type = screen.getByText('dark')
        expect(type).toHaveStyle(`
            background-color: #919191;
            color: #404040;
        `);
    });
    test('renders dragon type', async () => {
        render(<Chip variant='dragon'>dragon</Chip>);
        const type = screen.getByText('dragon')
        expect(type).toHaveStyle(`
            background-color: #add5db;
            color: #307082;
        `);
    });
    test('renders electric type', async () => {
        render(<Chip variant='electric'>electric</Chip>);
        const type = screen.getByText('electric')
        expect(type).toHaveStyle(`
            background-color: #fcf4c5;
            color: #8a770b;
        `);
    });
    test('renders fairy type', async () => {
        render(<Chip variant='fairy'>fairy</Chip>);
        const type = screen.getByText('fairy')
        expect(type).toHaveStyle(`
            background-color: #ffe3fc;
            color: #d417be;
        `);
    });
    test('renders fighting type', async () => {
        render(<Chip variant='fighting'>fighting</Chip>);
        const type = screen.getByText('fighting')
        expect(type).toHaveStyle(`
            background-color: #f5dbc6;
            color: #b86018;
        `);
    });
    test('renders fire type', async () => {
        render(<Chip variant='fire'>fire</Chip>);
        const type = screen.getByText('fire')
        expect(type).toHaveStyle(`
            background-color: #ffdcd9;
            color: #ad281c;
        `);
    });
    test('renders flying type', async () => {
        render(<Chip variant='flying'>flying</Chip>);
        const type = screen.getByText('flying')
        expect(type).toHaveStyle(`
            background-color: #e9eef5;
            color: #547196;
        `);
    });
    test('renders ghost type', async () => {
        render(<Chip variant='ghost'>ghost</Chip>);
        const type = screen.getByText('ghost')
        expect(type).toHaveStyle(`
            background-color: #cac9f5;
            color: #39386b;
        `);
    });
    test('renders grass type', async () => {
        render(<Chip variant='grass'>grass</Chip>);
        const type = screen.getByText('grass')
        expect(type).toHaveStyle(`
            background-color: #d2edca;
            color: #52634e;
        `);
    });
    test('renders ground type', async () => {
        render(<Chip variant='ground'>ground</Chip>);
        const type = screen.getByText('ground')
        expect(type).toHaveStyle(`
            background-color: #edd4cc;
            color: #804533;
        `);
    });
    test('renders ice type', async () => {
        render(<Chip variant='ice'>ice</Chip>);
        const type = screen.getByText('ice')
        expect(type).toHaveStyle(`
            background-color: #e6f7ff;
            color: #0079b3;
        `);
    });
    test('renders normal type', async () => {
        render(<Chip variant='normal'>normal</Chip>);
        const type = screen.getByText('normal')
        expect(type).toHaveStyle(`
            background-color: #ffe0c4;
            color: #6e4f35;
        `);
    });
    test('renders psychic type', async () => {
        render(<Chip variant='psychic'>psychic</Chip>);
        const type = screen.getByText('psychic')
        expect(type).toHaveStyle(`
            background-color: #fbf2ff;
            color: #ac28e0;
        `);
    });
    test('renders rock type', async () => {
        render(<Chip variant='rock'>rock</Chip>);
        const type = screen.getByText('rock')
        expect(type).toHaveStyle(`
            background-color: #eddeda;
            color: #522d23;
        `);
    });
    test('renders steel type', async () => {
        render(<Chip variant='steel'>steel</Chip>);
        const type = screen.getByText('steel')
        expect(type).toHaveStyle(`
            background-color: #ededed;
            color: #4a4a4a;
        `);
    });
    test('renders water type', async () => {
        render(<Chip variant='water'>water</Chip>);
        const type = screen.getByText('water')
        expect(type).toHaveStyle(`
            background-color: #dee7ff;
            color: #2f4ea3;
        `);
    });
})