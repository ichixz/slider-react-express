import styled from 'styled-components';

const box = styled.div`
    display: flex;
    width: 50%;
    height: 50vh;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;

    transition: all 0.3s linear;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`
export const Starwarsbox = box.extend`
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/3B1EMIOKH5.jpg');
`
export const Sweetsbox = box.extend`
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/TKVRMYLG5R.jpg');
`
export const Technologybox = box.extend`
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/FMGBFTLI2D.jpg');
`
export const Naturebox = box.extend`
    background-image: url('https://cdn.stocksnap.io/img-thumbs/960w/ICE09XNJ5K.jpg');
`
