import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship
    name="Millennium Falcon"
    speed="21 parsecs"
    hasRockets={true}
    colors={["red", "blue, purple"]}
  />,
  document.getElementById('root')
);
