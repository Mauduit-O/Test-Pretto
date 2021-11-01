import React from 'react';
import '../../assets/fonts/font.css'
import './btnCard.css'


class ButtonCard extends React.Component {
    constructor(props){
           super(props);
           this.state = {isSelected: false};
           this.state = {changeColor: false};
           this.getSelected = this.getSelected.bind(this);
           
      }

      colorCardSelected = () => {
            return this.setState( ({
                changeColor: !this.state.changeColor
        }));
      }

      selectCard = () => {
        this.props.selectClickHandler();
        this.setState( ({
            changeColor: !this.state.changeColor
        }));
      } 

      getSelected() {
        this.setState( ({
            isSelected: !this.state.isSelected
        }));
      }

      render(){  
          return (
            <button className={`btn_class ${this.state.isSelected ? 'blackButton' : ''}`}
            onClick={() => {
                this.getSelected();
                this.selectCard();
                this.colorCardSelected();
              }}>
                    {this.state.isSelected ? 'unselect' : 'select'}
                    {this.onDeleteClick}
                
            </button>
          )
      }
  }
  
  export default ButtonCard

