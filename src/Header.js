import React from 'react' 

export default function Header(props){

    return(
        <header className="App-header">
        <h1>{props.text}</h1>
      </header>
    )
}