import React from 'react'
import { AuxillaryActionsContainer, AuxillaryActionButton } from '../style';

const AuxillaryActions = 
  ({ 
    auxillaryActions = ['ADD TO REGISTRY', 'ADD TO LIST', 'SHARE']
  }) => 
   (
    <AuxillaryActionsContainer>
      {auxillaryActions.map(action => <AuxillaryActionButton key={action}>{action}</AuxillaryActionButton>)}
    </AuxillaryActionsContainer>
  )

export default AuxillaryActions;