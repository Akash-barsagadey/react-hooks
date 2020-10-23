import React, { useEffect, useState } from 'react';

const RegionalMetaContext = React.createContext({});

function RegionalMetaProvider(props) {
  const [country, setCountry] = useState(null);
  const [data, setData] = useState({});
  useEffect(() => {
    const { host } = window.location;
    // logic to identify country... to help us identify which json to load
    const country = 'in';
    setCountry(country);
    console.log('im here');
    /*
    * import ../regional_metadata/default.json + ${country}.json
    * merge it and set it via setData
    * can be served from api
    */
  }, []);


  return (
    <RegionalMetaContext.Provider value={{ country, data }}>
      {props.children}
    </RegionalMetaContext.Provider>
  )
}

function useRegionalMeta() {
  const context = React.useContext(RegionalMetaContext);
  if (context === undefined) {
    throw new Error(`useRegionalMeta must be used within a RegionalMetaContext`);
  }
  return context;
}

export { RegionalMetaProvider, useRegionalMeta };
