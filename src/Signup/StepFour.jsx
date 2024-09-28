import React from 'react'
import Privateinvestor from './Accounttypes/PrivateInvestor/PrivateInvestor'

const StepFour = ({accountType}) => {
  
  return (
    <div>
      {accountType ? <Privateinvestor/> : ''}
    step four
    </div>
  )
}

export default StepFour;
