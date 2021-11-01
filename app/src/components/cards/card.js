import React, { Component } from 'react'
import styled from 'styled-components';
import '../../assets/fonts/font.css'
import "./card.css"
import characters from '../../config/characters'
import ButtonCard from "../btnCard/btnCard"






class CharactersCard extends Component{

    constructor(props){
        super(props);
        this.state = {changeColor: false};
        
   }

      colorCardSelected = () => {
          this.setState( ({
            changeColor: !this.state.changeColor
        }));
      }

      render() {
        return(
            <div className="card-container"> {characters.map((character)=> (
                
                <Card className={this.state.changeColor ? 'updateCard' : ''}
                
>
                    <div>
                        <Title className={`title-color ${this.state.changeColor ? 'title-update-color' : ''}`}>{character.title}</Title> 
                        <ContainerTexte>
                            <Texte className={`text-color ${this.state.changeColor ? 'text-update-color' : ''}`}>{character.description}</Texte>
                        </ContainerTexte> 
                        <ButtonCard 
                        selectClickHandler = {this.colorCardSelected.bind()}   
                        />
                    </div>




                

                    
{/* 
                    <div>
                        <button onClick={() => setCount(count + 1)}>
                            select {count}
                        </button>
                    </div> */}

                </Card>
                ))}
            </div> 
        )  
    }  
} 

export default CharactersCard 


const Card= styled.div`
width: 302px;
height: 348px;
padding: 24px;
margin-bottom: 32px;
border: 1px solid #D3D3D3;
border-radius: 8px;
`
const Title= styled.h1`
font-family: InterBlack;
font-size: 32px;
letter-spacing: 0.02em;
margin-bottom: 20px;
`
const ContainerTexte= styled.div`
height: 230px;
overflow: scroll;
`
const Texte= styled.p`
font-family: InterRegular;
font-size: 16px;
line-height: 24px;
`