import React from 'react';
import styled from 'styled-components';

const QuotesWithStyling = styled.figure`
        font-family: Arial, Helvetica, sans-serif; 
        color: rgb(92, 89, 89);
        font-size: 10x;
        background-color: rgb(218, 216, 216);
        border-radius: 25px;
        padding: 20px;
        width: 400px;
        height: 150px;
`
// const BlockQuotesStyling
//     `

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
                    <blockquote className="quote-author">-{props.by}</blockquote>
                    <p>Source: <a href={props.source}>{props.source}</a></p>
            </QuotesWithStyling>
        </figure>

        </>
    );
};

export default Quote;

