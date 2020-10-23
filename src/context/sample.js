import React from 'react';
import { useRegionalMeta } from './region-context';

export const Sample = () => {
  const regionData = useRegionalMeta();
  console.log(regionData, 'this is just for testing');
  
  return <></>
}


// In class componet


// class Sample extends React.Component {
//   static contextType = RegionalMetaContext
//   render() {
//     const {country, data} =this.context;
//     console.log('data',data)
//     console.log('country',country)
//     return (
//       <></>
//     );
//   } 
// }


// export default Sample;