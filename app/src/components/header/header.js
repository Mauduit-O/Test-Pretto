import React from 'react'
import styled from 'styled-components';
import '../../assets/fonts/font.css'

export default function HeaderHome() {
    
    return(
        <HeaderContainer>
                <Title>Number of selected heroes:</Title>
                <Subtitle>Selected heroes: Donkey Kong, Kirby</Subtitle>
        </HeaderContainer>
    )
}

const HeaderContainer= styled.div`
margin: 2% 0% 2%;
// background-color: red;
`
const Title= styled.h1`
font-family: InterBlack; 
font-size: 32px;
color: #050505;
margin-bottom: 18px;
`
const Subtitle= styled.h2`
font-family: InterRegular; 
font-size: 16px;
color: #050505;
margin-bottom: 14px;
`