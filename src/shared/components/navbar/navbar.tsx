import React from "react";
import './navbar.sass';
export class Navbar extends React.Component {
    render() {
        return <div>
            <ul>
                <li> <a href="inicio"> Inicio</a></li>
                <li> <a href="contacto"> Contacto</a></li>
                <li> <a href="portafolio"> Portafolio</a></li>
                <li> <a href="luv"> Made with luv</a></li>
            </ul>
        </div>
    }
}