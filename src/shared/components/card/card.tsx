import React  from 'react';
import './card.sass';
import me from '../../../me.jpeg';
export class Card extends React.Component {
    render() {
        return <div className="hexagon">
            <div className="imageContainer">
            <img className="imageSrc" src={me} alt="Hey there its me!"/>
            </div>
        </div>;
    }
}