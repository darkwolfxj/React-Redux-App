import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const Data = ({ state, getData }) => {
    return (
        <div className="center black" style={ { marginTop: 100 } }>
        <div><button className="btn teal" onClick={ () => getData() }>Get Joke</button></div>
        {(state.isLoading) ? (<div><img src="https://i.imgur.com/vOpj1aC.gif" alt="loading" /></div>) : (
            state.joke.type==="single" ?
            <div className="white-text">{ state.joke.joke }</div> : 
            <>
                <div className="white-text">{ state.joke.setup }</div> 
                <div><button id="button" className="btn" onClick={ () => { 
                    document.getElementById("punchline").classList.toggle("hidden");
                    document.getElementById("button").classList.toggle("hidden")
                    } }>Punchline</button></div>  
                <div id="punchline" className="hidden white-text">{ state.joke.delivery }</div> 
            </>
        )}
        </div>
    )
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps, { getData })(Data)