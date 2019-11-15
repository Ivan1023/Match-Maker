import React, { Component } from 'react';
import './game-over.scss';

export class GameOver extends Component {
    render() {
        return (
            <div className="gameover"> 
                <button className="restart-button" onClick={this.props.restartGame}>Restart Game</button>
            </div>
        )
    }
}

export default GameOver
