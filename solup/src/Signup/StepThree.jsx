import React from 'react'
import PrivateInvestor from './Accounttypes/PrivateInvestor/PrivateInvestor'
import BasicTrader from './Accounttypes/BasicTrader'
import ProjectCreator from './Accounttypes/ProjectCreator'
import VentureCapitalist from './Accounttypes/Venturecapitalist/VentureCapitalist'

const StepThree = ({accountType}) => {

  const renderAccountTypes = () => {
    switch(accountType) {
      case 'investor':
        return <PrivateInvestor />;
      case 'basic':
        return <BasicTrader />;
      case 'creator':
        return <ProjectCreator />;
      case 'capitalist':
        return <VentureCapitalist />;
      default:
        return <div>Please select an account type.</div>;
    }
  }

  return (
    <div className='stepthree mb-4 rounded-lg w-full md:w-11/12'>
      <div className=''>
      {renderAccountTypes()}
      </div>
    </div>
  )
}

export default StepThree;
