import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './style.css';

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images,
            index: 0,
            actualImage: props.images[0]
        }
        console.log(props);

        this.nextimage = this.nextimage.bind(this);
    }


    addNew() {
        
    }

    nextimage() {
        if(this.state.index === this.state.images.length - 1) {
            this.state.index = -1;
        }
        this.setState({
            index: this.state.index += 1
        })
    }

    previmage() {
        if(this.state.index === 0) {
            this.state.index = (this.state.images.length - 1);
        }
        this.setState({
            index: this.state.index -= 1
        })
    }

    returnVideo() {
        if(this.state.images[this.state.index].type === 'video') return <video src={this.state.images[this.state.index].link} autoPlay="true" loop='true' width='100%' height='100%'/>
    }

    render() {
        const Img = Container.extend`
            background-image: url('${this.state.images[this.state.index].link}');
        `;
        console.log(this.state.actualImage.link);
        return (
            <Container>
                <TransitionGroup>
                        <CSSTransition timeout={800} key={this.state.index} classNames="fade">
                            <Img>
                                {this.returnVideo()}
                            </Img>
                        </CSSTransition>
                </TransitionGroup>
                <ButtonNext onClick={() => this.nextimage()}>{'>'}</ButtonNext>
                <ButtonPrev onClick={() => this.previmage()}>{'<'}</ButtonPrev>
                <ButtonBack onClick={() => window.location.reload()}>{'<<'}</ButtonBack>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
`
const Button = styled.span`
    position: absolute;
    color: white;
    top: 50%;
    font-size: 60px;

    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`
const ButtonNext = Button.extend`
    right: 0px;
`
const ButtonPrev = Button.extend`
    left: 0px;
`
const ButtonBack = Button.extend`
    top: 0px;
    left: 0px;
`