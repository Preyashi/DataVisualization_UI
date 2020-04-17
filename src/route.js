import React from 'react';
/*eslint-enable no-unused-vars*/
import {Route, BrowserRouter} from 'react-router-dom';

// COMPONENT

import Components from './Components/index';
import AccountComponent from './Components/Accounts/index';
import CostCenter from './Components/CostCenter/index';

class RouteApp extends React.Component{
  render(){
    return(
    <BrowserRouter >
    <div className="Routeappdiv">
      <Route exact path='/' component={Components} />
      <Route path='/accounts' component={AccountComponent} />
      <Route  path='/customers' component={Components} />
      <Route path='/costcenter' component={CostCenter} />
    </div>
    </BrowserRouter >
);
}
}

export default RouteApp;
