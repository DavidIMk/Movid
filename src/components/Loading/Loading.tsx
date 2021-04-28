import React from 'react';
import { DivWrapper } from './Loading.style';

const Loading = () => {


    return (
        <DivWrapper>
            <svg width="40" height="15" viewBox="-1 0 33 12">
                <circle
                    className="spinner"
                    cx="4"
                    cy="6"
                    r="4"
                    fill="#41403E"
                />
                <circle
                    className="spinner"
                    cx="16"
                    cy="6"
                    r="4"
                    fill="#41403E"
                />
                <circle
                    className="spinner"
                    cx="28"
                    cy="6"
                    r="4"
                    fill="#41403E"
                />
            </svg>
        </DivWrapper>
    )
}

export default Loading;