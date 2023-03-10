import React from 'react'
import '../App.css'
import { CondComp } from './ConductorComponent';

function Conductor() {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ]

    return (
        <div className='App'>
            {planets.map((planet, key) => {
                return (
                    <div>
                        {/* <h1 key={key}>{planet.isGasPlanet && planet.name} </h1>
                        <hr/> */}
                        <CondComp name={planet.name} isGasPlanet={planet.isGasPlanet} key={key}/>
                    </div>

                );
            })}
        </div>
    );
}

export default Conductor;