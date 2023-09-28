import React from 'react';
import './footer.css';
import Copyright from '../copyright/Copyright';

const elements1 = ["Tos","About"];
const items = [];
const elements2 =["contact","legal"];

for( const [index, value] of elements1.entries()){
    items.push(<li>{value}</li>);
}
function Footer(props) {
    
    let isLogged = false;
    let button;
    if(isLogged){
        button=<button>Logout</button>;
    } else{
        button= <button>Login</button>;
    }

    return(
        <div>
            <footer>
                <ul>
                    {items}
                    <li>Contact: {props.contactEmail},
                    City: {props.companyData.city}
                    </li>
                    {elements2.map((value,index)=>{
                    return <li>{value}</li>
                        }     )}
                </ul>
                <span>{Copyright}</span>
                <Copyright year="202x"/> 
                {button}
                {isLogged===true && 
                    <div> Sprawdz poczte!</div>
                }
                {isLogged
                ?<div>Zobacz notyfikacje</div>
                 : <div> Zaloguj się dla notyfikacji</div>
                }

            </footer>
        </div>
    );
    
}
export default Footer;