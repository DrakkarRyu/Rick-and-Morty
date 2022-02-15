import React from "react";
import ResidentInfo from "./ResidentInfo"

const ResidentsList = ({ location }) => {
    return (
        <div className="residentsListContainer">
            {location.residents.slice(0, 10).map((resident) => (
                <div key={resident}>
                    <ResidentInfo residentURL={resident} />
                </div>
            ))}
        </div>
    );
};

export default ResidentsList;  