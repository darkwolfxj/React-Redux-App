import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const Data = ({ state, getData }) => {
    return (
        <>
        <div className="center"><button className="btn" onClick={ () => getData() }>Get Joke</button></div>
        {(state.isLoading) ? (<div className="center"><img src="https://i.imgur.com/vOpj1aC.gif" alt="loading" /></div>) : (
            state.joke.type==="single" ?
            <div className="center">{ state.joke.joke }</div> : 
            <>
                <div className="center">{ state.joke.setup }</div> 
                <div id="button" className="center"><button className="btn" onClick={ () => { 
                    document.getElementById("punchline").classList.toggle("hidden");
                    document.getElementById("button").classList.toggle("hidden")
                    } }>Punchline</button></div>  
                <div id="punchline" className="hidden center">{ state.joke.delivery }</div> 
            </>
        )}
        </>
    )
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps, { getData })(Data)