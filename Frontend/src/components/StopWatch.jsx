import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
export const Stopwatch = (props) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}

    render={({ formatted, hours, minutes, seconds }) => {
      if(props.beginClk){
        return(
          <h1>
            {formatted}
          </h1>
        );
      }
      return (
          <h1>
            00:00:00
          </h1>
      );
    }}
   />
);
 
export default Stopwatch;