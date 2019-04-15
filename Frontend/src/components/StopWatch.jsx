import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
export const Stopwatch = (begin) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    autoStart= {begin}

    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <h1>
            { formatted }
          </h1>
        </div>
      );
    }}
   />
);
 
export default Stopwatch;