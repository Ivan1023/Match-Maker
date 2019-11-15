import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.scss';


export class Card extends Component {
    render() {
        
        return (
            <ReactCardFlip isFlipped={this.props.isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
                <button type="button" id={this.props.id} className={`card__front ${this.props.object !== -1 ? "" : "hide-card"}`} onClick={this.props.handleClick} key="front" /> 

                <button type="button" id={this.props.id} className={`card__back ${this.props.object !== -1 ? "" : "hide-card"}`} onClick={this.props.handleClick} key="back">
                    <img className="card__img" src={this.props.object.image} alt={this.props.id}/>
                </button>
            </ReactCardFlip>
        )
    }
}

export default Card