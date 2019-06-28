import React, { Component } from 'react'
import Img1 from '../images/blastoids.jpeg'
import Img2 from '../images/charzard.jpeg'
import Img3 from '../images/mewtwo.jpeg'
import Img4 from '../images/machop.jpeg'
import Img5 from '../images/mimikyu.jpeg'
import Img6 from '../images/pikachu.jpeg'
import Img7 from '../images/raticate.jpeg'
import Img8 from '../images/sandshrew.jpeg'
import Img9 from '../images/snorlax.jpeg'
import Img10 from '../images/squirtle.jpeg'



//If card is not in array add one point 

//if card is in array game is over 


class Card extends Component {
    state = {
        images: [
            { id: 1, src: Img1 },
            { id: 2, src: Img2 },
            { id: 3, src: Img3 },
            { id: 4, src: Img4 },
            { id: 5, src: Img5 },
            { id: 6, src: Img6 },
            { id: 7, src: Img7 },
            { id: 8, src: Img8 },
            { id: 9, src: Img9 },
            { id: 10, src: Img10 },
        ],
        count: 0,
        guess: [],
        isGame: true,
        message: "Click on a Pokemon to start game!"
    }
    shuffle(temp) {
        let shuffledArr = temp.sort(() => Math.random() - 0.5)
        console.log(shuffledArr)
        return shuffledArr
    }


    handleClick = id => {
        this.setState({
            message: 'Good job! Keep catchin them'
        })
        console.log(id)
        let guessArray = this.state.guess
        if (guessArray.indexOf(id) !== -1) {
            this.setState({
                count: 0,
                guess: [],
                isGame: false,
                message: 'You lose...click on another Pokemon to try again!'
            }, _ => console.log(this.state.guess))
        } else if (guessArray.length === 10) {
            this.setState({
                isGame: false,
                message: 'You caught them all!'
            })
        } else {
            let temp = this.shuffle(this.state.images)
            this.setState({
                images: [...temp]
            },_ => { 
                guessArray.push(id)
                this.setState({
                    count: this.state.count + 1,
                    isGame: true,
                    guess: guessArray,
                    message: 'Good job! Keep catchin them'
                }, _ => console.log(this.state.guess))
            })
        }

    }




    render() {
        return (
            <div>

                {
                    this.state.images.map(({ id, src }) =>
                        <img className='card-img-top' style={{ width: 8 + 'rem', margin: 10 + 'px' }} key={id} src={src} alt='' onClick={this.handleClick.bind(this, id)} />
                    )
                }
                <div> <h2><span className="badge badge-primary">Score:</span> {this.state.count}</h2></div>
                <div>{this.state.message}</div>

            </div>
        )
    }
}

export default Card