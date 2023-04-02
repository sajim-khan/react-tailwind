import React from 'react';

const PriceCard = ({price}) => {
    return (
      <div>
        <ul>
          <li>
            {price.id}
            {price.name}
            {price.price}
            {price.features[3]}
          </li>
        </ul>
      </div>
    );
};

export default PriceCard;