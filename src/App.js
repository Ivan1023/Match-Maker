import React, { Component } from 'react';
import Card from './components/card/Card';
import GameOver from './components/GameOver/GameOver';
import { duplicatedCards } from './data/data';
import './App.scss';

export class App extends Component {
  //create state:
  state = {
    isFlipped: Array(16).fill(false),
    shuffledCards: duplicatedCards.sort(() => Math.random() - 0.5),
    clickCount: 1,
    prevSelectedCard: -1,
    prevCardId: -1
  }

  handleClick = (event) => {
    event.preventDefault();
    const cardsId = event.target.id;

    const newFlip = this.state.isFlipped.slice();
    this.setState({
        prevSelectedCard: this.state.shuffledCards[cardsId],
        prevCardId: cardsId
    });

    if(newFlip[cardsId] === false) {
      newFlip[cardsId] = !newFlip[cardsId];
      this.setState(prevState => ({
        isFlipped: newFlip,
        clickCount: this.state.clickCount + 1
      }));

      if(this.state.clickCount === 2) {
        this.setState({ clickCount: 1});
        const prevCardId = this.state.prevCardId;
        const newCard = this.state.shuffledCards[cardsId];
        const previousCard = this.state.prevSelectedCard;
  
        this.cardMatch(previousCard, newCard, prevCardId, cardsId);
      }
    }
  };

  cardMatch = (card1, card2, card1Id, card2Id) => {
    if(card1 === card2) {
      const hideCard =this.state.shuffledCards.slice();
      hideCard[card1Id] = -1;
      hideCard[card2Id] = -1;
      setTimeout( () => {
        this.setState(prevState => ({
          shuffledCards: hideCard
        }))
      }, 1000);
    } else {
      const flipBack = this.state.isFlipped.slice();
      flipBack[card1Id] = false;
      flipBack[card2Id] = false;
      setTimeout( () => {
        this.setState (prevState => ({
          isFlipped: flipBack
        }))
      }, 2000);
    }
  }

  restartGame = () => {
    this.setState({
      isFlipped: Array(16).fill(false),
      shuffledCards: duplicatedCards.sort(() => Math.random() - 0.5),
      clickCount: 1,
      prevSelectedCard: -1,
      prevCardId: -1
    })
  }

  render() {
  
    return (
      <div className="background">
        <div className="title">
          <h1>Let's play a game</h1>
          <h2>Try to match the image</h2>
        </div>
        <div className="game__field">
          {
            this.state.shuffledCards.map((item, index) =>  
              <Card key={index} id={index} object={item} isFlipped={this.state.isFlipped[index]} handleClick={this.handleClick} />
            )
          }
        </div>
        <GameOver restartGame={this.restartGame} />
      </div>
    )
  }
}

export default App

