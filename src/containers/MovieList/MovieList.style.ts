import styled from "styled-components";

export const DivMovieListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
`;

export const DivSearchContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

export const InputSearch = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 17px;
    border: 1px solid grey;
    width: 80%;
    background: #f1f1f1;
`;

export const ButtonSearch = styled.button`
    width: 20%;
    padding: 10px;
    background: #2196F3;
    color: white;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
`;

export const DivListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;