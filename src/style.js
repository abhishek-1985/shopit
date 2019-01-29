import styled from 'styled-components'
import FontAwesome from 'react-fontawesome';

/* Styling for the Desktop and Mobile .js files  */

export const ParentContainer = styled.div`
  display: flex;
`
ParentContainer.displayName= 'ParentContainer';

export const CustomColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`
CustomColumn.displayName='CustomColumn';

/* Styling for the  Title.js file  */

export const HeaderContainer = styled.div`
  flex: 1;
  text-align: center;
`
HeaderContainer.displayName='HeaderContainer';

export const HeaderText = styled.h1`
  font-weight: 200;
`
HeaderText.displayName='HeaderText';

/* Styling for Images */

export const PrimaryImage = styled.div`
  flex: 1;
  width: 100%;
`
PrimaryImage.displayName='PrimaryImage';

export const ChevronContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  color: #a9a9a9;
  cursor: pointer;
`
ChevronContainer.displayName='ChevronContainer';

export const ChevronFontAwesome= styled(FontAwesome)`
  flex: 1;
`
ChevronFontAwesome.displayName='ChevronFontAwesome';

export const CarouselContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`
CarouselContainer.displayName='CarouselContainer';

export const ThumbnailsContainer = styled.div`
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`
ThumbnailsContainer.displayName='ThumbnailsContainer';

export const ThumbnailImage = styled.div`
  margin: 0.5em;  
  padding: 0 0.5em
  flex: 1;
  &:hover {
    transform: scale(1.5);
  }
  cursor: pointer;
`
ThumbnailImage.displayName='ThumbnailImage';

/* Styling for Reviews */

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`
SummaryContainer.displayName='SummaryContainer';

export const TotalReviewCount = styled.span`
  font-size: 0.75em;
`
TotalReviewCount.displayName ='TotalReviewCount';

export const RedStar = styled(FontAwesome)`
  color: #cc0000;
`
RedStar.displayName='RedStar';

export const GreyStar = styled(FontAwesome)`
  color: #999999;
`
GreyStar.displayName = 'GreyStar';

export const ProConContainer = styled.div`
  background: #f6f5f5;
  padding: 1em;
  margin-top: 0.5em;
`
ProConContainer.displayName ='ProConContainer';

export const ProConRow = styled.div`
  display: flex;
  padding-bottom: 1em;
`
ProConRow.displayName ='ProConRow';

export const ProConColumn = styled.div`
  flex: 1;
`
ProConColumn.displayName='ProConColumn';

export const ProConText=styled.div`
  font-size: 0.75em;
`
ProConText.displayName ='ProConText';

export const ReviewTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  padding-bottom: 0.5em;
`
ReviewTitle.displayName='ReviewTitle';

export const ReviewFooter = styled.div`
  margin-top: 1em;
  font-size: 0.75em;
`
ReviewFooter.displayName='ReviewFooter';

export const ReviewAuthor = styled.a`
  text-decoration: none;
`
ReviewAuthor.displayName ='ReviewAuthor';

/* Styling for Price.js */

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1.4em 0 1em 0;
`
PriceContainer.displayName ='PriceContainer';

export const PriceValue = styled.div`
  font-size: 2em;
  font-weight: bold;
`
PriceValue.displayName ='PriceValue'

export const PriceQualifier = styled.span`
  text-transform: lowercase;
  font-size: 0.75em;
  padding-left: 0.5em;
`
PriceQualifier.displayName ='PriceQualifier';

/* Styling for Quantity.js */

export const QuantityContainer = styled.div`
  border: 1px solid #cccccc;
  display: flex;
  border-radius: 4px;
  width: calc(50% - 1.5em);
  padding: 0.3em 0.5em;
  margin: 1.5em 0 0 0;
`
QuantityContainer.displayName ='QuantityContainer';

export const QuantityLabel = styled.div`
  flex: 1;
  line-height: 2em;
`
QuantityLabel.displayName ='QuantityLabel';

export const QuantityButton = styled.button`
  text-align: center;
  border: 1px solid #cccccc;
  background: #cccccc;
  color: white;
  width: 1.75em;
  height: 1.75em;
  line-height: 1em;
  border-radius: 50%;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background: #a9a9a9;
    border: 1px solid #a9a9a9;
  }
`
QuantityButton.displayName ='QuantityButton';

export const QuantityNumber = styled.span`
  align-self: center;
  font-weight: bold;
  font-size: 1.25em;
  padding: 0 1em 0 1em;
`
QuantityNumber.displayName ='QuantityNumber';

/* Styling for Promotions */

export const PromotionsContainer = styled.div`
  color: #c91300;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding: 1em 0;
`
export const PromotionText = styled.div`
  margin-left: 1.5em;
  text-transform: lowercase;
`
export const PromoLabel = styled(FontAwesome)`
  float: left;
`

/* Styling for ShoppingButtons.js  */

export const ShoppingButtonsContainer = styled.div`
  margin: 1.5em 0 1em 0;
`
ShoppingButtonsContainer.displayName ='ShoppingButtonsContainer';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
ButtonsContainer.displayName ='ButtonsContainer';

export const ShoppingButton = styled.button`
  line-height: 2em;
  width: calc(50% - 0.5em);
  color: white;
  border: ${({ type }) => (type === 'CART' ? '1px solid #c91300' : '1px solid #2b2b2b')};
  border-radius: 4px;
  padding: 0.25em 0.5em;
  background-color: ${({ type }) => (type === 'CART' ? '#c91300' : '#2b2b2b')};
  cursor: pointer;
  &:hover {
    background-color: ${({ type }) => (type === 'CART' ? '#990202' : '#000000')};
  }
`
ShoppingButton.displayName ='ShoppingButton';

export const FindInStore =styled.a`
  text-align: center;
  font-size: 0.75em;
  font-weight: bold;
  color: #000000;
  width: 50%;
  margin-top: 0.5em;
  display: block;
  text-decoration: none;
`
FindInStore.displayName ='FindInStore';

/* Styling for ReturnPolicy.js */

export const ReturnPolicyContainer = styled.div`
  color: #808080;
  display: flex;
  margin-bottom: 1em;
`
ReturnPolicyContainer.displayName ='ReturnPolicyContainer';

export const ReturnPolicyLabel = styled.div`
  font-size: 1.2em;
  padding-right: 1em;
  border-right: 1px solid #cccccc;
`
ReturnPolicyLabel.displayName ='ReturnPolicyLabel';

export const ReturnPolicyText = styled.div`
  padding-left: 2em;
  font-size: 0.5em;
`
ReturnPolicyText.displayName ='ReturnPolicyText';

/* Styling for AuxillaryActions.js */
export const AuxillaryActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0 0 0;
`
export const AuxillaryActionButton = styled.button`
  flex: 1;
  max-width: calc(33.333333% - 0.5em);
  background: #f3f3f3;
  border-color: #f3f3f3;
  padding: 0.25em;
  border-radius: 4px;
  line-height: 2em;
  cursor: pointer;
  &:hover {
    background: #cccccc;
  }
`

/* Styling for Highlights */

export const HighlightsHeader = styled.h2`
  font-size: 2em;
`
HighlightsHeader.displayName ='HighlightsHeader';

export const HighlightsList = styled.ul`
  color: #808080;
`
HighlightsList.displayName = 'HighlightsList';

export const HighlightsItem = styled.li`
  padding: 0.15em 0 ;
`
