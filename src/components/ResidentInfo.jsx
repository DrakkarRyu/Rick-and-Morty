import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ResidentInfo.css"

const ResidentInfo = ({ residentURL }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(residentURL)
            .then((res) => setCharacter(res.data));
    }, [residentURL]);

    return (
        <div className="column">
            <div className="card">
                <strong>{character?.name}</strong>
                <img src={character?.image} alt="character.name" />
                <ul className="attribute">
                    <div className="status">
                        <div className={character?.status === 'Alive' ? 'green' : character?.status === 'Dead' ? 'red' : 'gray'}></div>
                        <li>Status: {character?.status}</li>
                    </div>
                    <li>Origin: {character?.origin.name}</li>
                    <li>Specie: {character?.species}</li>
                    <li>Episodes: {character?.episode.length}</li>
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;