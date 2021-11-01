import React from 'react'
import styled from 'styled-components';
import '../../assets/fonts/font.css'


export default function BtnHeader() {
    
    return(
        <BtnContainer>
                <BtnValidate>Validate</BtnValidate>
                <BtnClear>Clear</BtnClear>
        </BtnContainer>
    )
}

const BtnContainer= styled.div`
margin-bottom: 4%;
`
const BtnValidate= styled.button`
font-family: InterBold; 
font-size: 18px;
background-color: #FC5C63;
color: white;
border-radius: 8px;
border: none;
width: 121px;
height: 64px;
margin-right: 26px;
&:hover {
    background-color: #FC5057;
}
`
const BtnClear= styled.button`
font-family: Interbold; 
font-size: 18px;
background-color: #050505;
color: white;
border-radius: 8px;
border: none;
width: 96px;
height: 64px;
    &:hover {
        background-color: #1F1F1F;
    }
`