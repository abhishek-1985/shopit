import React from 'react';

import PrimaryImage from './PrimaryImage';
import Carousel from './Carousel';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: 0
    }
  }

  selectImage = index => {
    this.setState({ selectedImage: index })
  }

  render() {
    const { selectedImage } = this.state
    const { imageArray } = this.props
    const { image } = imageArray[selectedImage]
    return (
      <div>
        <PrimaryImage imageSrc={image} />
        <Carousel
          selectedIndex={selectedImage}
          imageArray={imageArray}
          selectImage={this.selectImage}
        />
      </div>
    )
  }
}

export default Images
