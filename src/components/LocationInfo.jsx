import React from 'react';

const LocationInfo = ({ type, population, dimension }) => {
    return (
        <ul>
            <li>Type:{type}</li>
            <li>Population:{population}</li>
            <li>Dimension:{dimension}</li>
        </ul>
    );
};

export default LocationInfo;