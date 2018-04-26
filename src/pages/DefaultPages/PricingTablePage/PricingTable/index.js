import React from 'react'
import PricingItem from 'components/Clean/PricingItem'
import './styles.css'

class PricingTable extends React.Component {
  render() {
    return (
      <div>
        <div className="pricing-table">
          <PricingItem type="success" extended={true} />
          <PricingItem btnType="primary" />
          <PricingItem btnType="warning" />
          <PricingItem type="default" />
        </div>
        <div className="pricing-table">
          <PricingItem type="warning" />
          <PricingItem btnType="primary" />
          <PricingItem extended={true} btnType="primary" />
          <PricingItem btnType="primary" />
        </div>
      </div>
    )
  }
}

export default PricingTable