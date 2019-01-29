import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Images from './components/Images';
import Price from './components/Price';
import Promotions from './components/Promotions';
import Quantity from './components/Quantity';
import ShoppingButton from './components/ShoppingButton';
import ReturnPolicy from './components/ReturnPolicy';
import AuxillaryActions from './components/AuxillaryActions';
import Highlights from './components/Highlights';
import Reviews from './components/Reviews';

import { CustomColumn, ParentContainer } from './style';

import { 
  getItemData,
  getItemDetails, 
  getItemImages, 
  getItemAvaibilility, 
  getItemPrice, 
  getItemPromotions,
  getReturnPolicy, 
  getReviewRatings
} from './ducks/item';


class Desktop extends React.Component {

  componentWillMount() {
    const { _getItemData } = this.props; 
    _getItemData();
  }
  render() {
    const { itemDetails, itemImages, itemAvaibility, itemPrice, itemPromotions, itemReturnPolicy, itemReviews } = this.props; 
    const itemKeys = Object.keys(itemDetails);
    return (
      <div>
        {itemKeys.length && 
          <ParentContainer>
          <CustomColumn>
            <Header textContent={itemDetails.title} />
            <Images imageArray={itemImages} />
            <Reviews reviews={itemReviews} />
            <Price price={itemPrice.formattedPriceValue} qualifier={itemPrice.priceQualifier} />
            <Promotions promotions={itemPromotions} />
            <Quantity />
            <ShoppingButton
              availableOnline={itemAvaibility.availableOnline}
              availableInStore={itemAvaibility.availableInStore}
            />
            <ReturnPolicy text={itemReturnPolicy} />
            <AuxillaryActions />
            <Highlights highlights={itemDetails.highlights} />
          </CustomColumn>
        </ParentContainer>
        }
      </div>
    )
  }
};

export default connect(
  state => {
    return {
      itemDetails: getItemDetails(state),
      itemImages: getItemImages(state),
      itemPrice: getItemPrice(state),
      itemAvaibility: getItemAvaibilility(state),
      itemPromotions: getItemPromotions(state),
      itemReturnPolicy: getReturnPolicy(state),
      itemReviews: getReviewRatings(state)
    } 
  }  ,
  dispatch=>({
    _getItemData: () => {
      dispatch(getItemData())
    }
  })
)(Desktop);
