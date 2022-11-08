import React from 'react';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const HpServices = ({services}) => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 mb-16 gap-10 mx-36'>
               {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
          </div>
     );
};

export default HpServices;