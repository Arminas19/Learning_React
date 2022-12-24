import React from 'react'

export const CondComp = (props) => {
    return (
        <div>
            <h1 key={props.key}>{props.isGasPlanet && props.name} </h1>
        </div>
  );
}
