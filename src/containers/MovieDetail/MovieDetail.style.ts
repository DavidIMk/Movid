import styled from "styled-components";

export const DivMovieDetailContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
`;

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: grey;
    padding: 20px;
`;

export const DivTitle = styled.div`
    font-size: 24px;
    color: white;
`;

export const DivRating = styled.div`
    color: white;
    font-size: 18px;

    .rate {
        font-size: 24px;
        font-weight: bold;
    }
`;

export const ImgPoster = styled.img`
    cursor: pointer;
    margin: 20px 0;
`;

export const DivDescLine = styled.div`
    display: flex;
    line-height: 24px;
`;

export const DivLabel = styled.div`
    font-weight: bold;
    min-width: 100px;
`;

export const DivDesc = styled.div`
    margin-left: 10px;
`;

export const DivBackHome = styled.div`
    cursor: pointer;
    text-align: center;
    width: 100%;
    display: inline-block;
    margin: 20px auto;
    background-color: red;
    border-radius: 20px;
    padding: 15px;
`;