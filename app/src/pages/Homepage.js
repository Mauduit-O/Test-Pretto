import React from 'react'
import { useState } from "react"
import styled from 'styled-components';
import characters from '../config/characters';
import "./Homepage.css";
import HeaderHome from "../components/header/header";
import BtnHeader from "../components/btnHeader/btnHeader"
// import SearchBarHeroes from "../components/searchBar/searchBarHeroes"
import CharactersCard from "../components/cards/card";
import icon from '../assets/icon/icon-search.png'


export default function Homepage() {
    const [searchTerm, setsearchTerm] = useState("");
    const handleSearchTerm = (e) => {
        let value =e.target.value;
        value.length > 1 && setsearchTerm(value);
    }

    return(
           <Container> 

                <HeaderHome />
                <BtnHeader />
                <div>
                <ContainerBar>
                    <Bar className="search"
                        type="text"
                        name="searchBar"
                        placeholder="Search heroes..."
                        onChange={handleSearchTerm}
                        
                    />
                    <Icon src={icon} alt="icon search" />
                </ContainerBar>
                <ContainerResult className="search__results">
                    {characters
                    .filter((val) => {
                        return (val.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    })
                    .map((val) => {
                        return (
                        
                        <div className="search__results" key={val.id}>
                            {val.title}
                        </div> 
                        )
                    })}
                    
                </ContainerResult>
        </div>
                {/* <SearchBarHeroes /> */}
                <CharactersCard /> 

           </Container>
    )
}

const Container= styled.div`
padding: 2% 15%;
`
const ContainerBar= styled.div`
position: relative;
width: 600px;
margin-bottom: 20px;
`

const Bar= styled.input`
font-family: "InterRegualr";
font-size: 16px;
color: #8C8C8C;
width: 600px;
height: 56px;
background-color: #F5F5F5;
border: 1px solid #D3D3D3;
display: flex;
align-items: center;
padding-left: 16px;
position: relative
`
const Icon= styled.img`
position: absolute;
top: 0;
right: 0;
transform: translate(10 px , 10 px );
transform: translate(0px, 20px);
right: 0;
`
const ContainerResult= styled.div`
margin-bottom: 30px;
`