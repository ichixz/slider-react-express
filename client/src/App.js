import React, { Component } from 'react';
import Slider from './Slider';

//styles
import ContainerStyle from './styles/container';
import { Starwarsbox, Sweetsbox, Technologybox, Naturebox } from './styles/box';
//end-styles

class App extends Component {
  constructor() {
    super();
    this.state = {
      clicker: false,
      images: []
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(routeName) {
    fetch(`/${routeName}`)
      .then(res => res.json())
      .then(imagesX => this.setState({
        clicker: true,
        images: imagesX
      }));
  }

  renderScreenChoosePath() {
    return <ContainerStyle><Starwarsbox onClick={() => this.onClickHandler('starwars')} /><Sweetsbox onClick={() => this.onClickHandler('sweets')}/><Technologybox /><Naturebox /></ContainerStyle>
  }

  renderSlideshow() {
    return <Slider images={this.state.images}/>
  }

  render() {
    return this.state.clicker !== true ? this.renderScreenChoosePath() : this.renderSlideshow();
  }
}

export default App;
