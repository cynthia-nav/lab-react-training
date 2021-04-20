import React from 'react';

function Greetings({lang, children}) {
    let language = "Hello";
    switch(lang) {
        case 'de':
            language = "Hallo";
            break;
        case 'en':
            language = "Hello";
            break;
        case 'es':
            language = "Hola";
            break; 
        case 'fr':
            language = "Bonjour";
            break;

    }
    return (
        <div className="container">
            {language} {children}
        </div>
    );
}


export default Greetings;