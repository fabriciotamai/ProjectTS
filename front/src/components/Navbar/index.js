import React from 'react';

import {Container} from './styles';

import { Navitem } from '../Dropdown';







export default function NavBar(){
return(
    
        
        <Container>
        <header className="header-one">

            <nav className="nav-one">

        <Navitem title="Professor">

            <ul>
                <li>teste</li>
                    </ul>
                    
        </Navitem>
        </nav>
        <nav className="nav-two">

            <Navitem title="Aluno">

            <ul>
                <a href="#" >Agenda</a>
            </ul>
        </Navitem>
        </nav>
        </header>
        </Container>
        

     
    )


}