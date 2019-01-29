import React from 'react';
import Chevron from './Chevron';
import Thumbnail from './Thumbnail';

import { CarouselContainer, ThumbnailsContainer } from '../../style';

class Carousel extends React.Component {
  state = {
    startIndex: 0
  }
  static defaultProps = {
    numberOfThumbnailsVisible: 3
  }
  componentDidUpdate({ selectedIndex: prevIndex }) {
    const { imageArray, numberOfThumbnailsVisible, selectedIndex } = this.props
    /* If the selected image didn't change, we needn't do anything */
    if (selectedIndex === prevIndex) {
      return
    }
    const { startIndex } = this.state
    /* If the selected image is off the screen to the right */
    if (selectedIndex > startIndex + numberOfThumbnailsVisible - 1) {
      this.setState({
        startIndex: (imageArray.length - numberOfThumbnailsVisible > selectedIndex) ? selectedIndex : imageArray.length - numberOfThumbnailsVisible
      })
      /* If the selected image is off the screen to the left */
    } else if (selectedIndex < startIndex) {
      this.setState({
        startIndex: (selectedIndex - numberOfThumbnailsVisible + 1) > 0 ? (selectedIndex - numberOfThumbnailsVisible + 1)  : 0 
      })
    }
  }
  /**
   * Use the chevron buttons to shift the images left or right
   **/
  shift = direction => {
    const { imageArray, numberOfThumbnailsVisible } = this.props
    const { startIndex } = this.state
    const newStartIndex =
      direction === 'left'
        ? (startIndex-1) > 0 ? startIndex-1 : 0
        : (imageArray.length - numberOfThumbnailsVisible) > (startIndex + 1) ? (startIndex + 1) : (imageArray.length - numberOfThumbnailsVisible)
      this.setState({ startIndex: newStartIndex })
  }
  render() {
    const { imageArray, numberOfThumbnailsVisible, selectedIndex } = this.props
    const { startIndex } = this.state
    const ThumbnailsArray = Array(numberOfThumbnailsVisible).fill('');
    return (
      <CarouselContainer>
        <Chevron direction={'left'} onClick={() => this.shift('left')}/>
        <ThumbnailsContainer>
          {ThumbnailsArray
            .map((x, index) => {
              const { image } = imageArray[index + startIndex]
              return (
                <Thumbnail
                  dataCy={`thumbnail-${index}`}
                  numberOfThumbnailsVisible={numberOfThumbnailsVisible}
                  key={image}
                  imageSrc={image}
                  onClick={() => {
                    this.props.selectImage(index + startIndex)
                  }}
                  isSelected={selectedIndex === index + startIndex}
                />
              )
            })}
        </ThumbnailsContainer>
        <Chevron direction={'right'} onClick={() => this.shift('right')} />
      </CarouselContainer>
    )
  }
}

export default Carousel
