import styled from "styled-components";

export const DivModalContainer = styled.div<{ isShowing: boolean }>`
    display: ${(props) => props.isShowing ? 'block' : 'none'};
    position: fixed;
    z-index: 1;
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
`;

export const ImgModalContent = styled.img`
    margin: auto;
    display: block;
`

export const DivClose = styled.div`
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
`;