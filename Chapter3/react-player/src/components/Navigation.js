import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({setLibraryStatus, libraryStatus}) => {

    //Set state false/true to show library
    const checkLibraryStatus = () => { 
        setLibraryStatus(!libraryStatus)
    };

    return(
        <nav>
            <h1>Tempo</h1>
            <button onClick={checkLibraryStatus}>Library<FontAwesomeIcon icon={faMusic}/></button>
        </nav>
    );
}

export default Navigation;