import React from 'react';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
      <div>
        <span className='flex items-center mb-1'>
          <CheckCircleIcon className="h-4 w-4 mx-2 text-white" /> {feature}
        </span>
      </div>
    );
};

export default Feature;