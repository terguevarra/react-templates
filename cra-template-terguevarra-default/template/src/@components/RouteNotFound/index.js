import React from 'react';
import { ReactComponent as Logo } from './page-not-found.svg'; //you can change this to any SVG file that you want

function RouteNotFound(){
    return(
        <div style={{ textAlign: 'center' }}>
            <Logo style={{ height: '250px', width: '500px' }} />
            <h1>
                The page you are looking for isn’t here
            </h1>
        </div>
    );
}
export default RouteNotFound;