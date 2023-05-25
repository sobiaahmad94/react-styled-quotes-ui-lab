import React from 'react';
import styled from 'styled-components';

const QuotesWithStyling = styled.figure`
        color: blue;
        border-radius: 25px;
        border: 2px solid #73AD21;
        padding: 20px;
        width: 200px;
        height: 150px;
`

// need to pass props in as parameters Quote(props) - props.by props.source, props.children
// use destructuring to make it neater
// function Quote({ by, source, children }) 
// then {children} 
// then {by}

function Quote(props) {
    return (
        <>
        <figure>

            <QuotesWithStyling>
                    <cite>"{props.children}"</cite>
                    <p>{props.by}</p>
                    <p>Source: <a href={props.source}>{props.source}</a></p>
            </QuotesWithStyling>
        </figure>

        </>
    );
};

export default Quote;

