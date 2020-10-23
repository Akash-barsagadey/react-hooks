import React from 'react';
import { useRegionalMeta } from './region-context';

export const Sample = () => {
  const regionData = useRegionalMeta();
  console.log(regionData, 'this is just for testing');
  
  return <></>
}
