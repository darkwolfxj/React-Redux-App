import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const Data = ({ state, getData }) => {
    return (
        <>
        <div className="center"><button className="btn" onClick={ () => getData() }>Get Data</button></div>
        {(state.isLoading) ? (<div className="center"><img src="https://i.imgur.com/vOpj1aC.gif" alt="loading" /></div>) : (
            (state.joke.type===single) ?
            state.joke.joke : 
                <div>{ state.joke.setup }</div> 
                <button className="btn" onClick={ () => document.getElementById("punchline").classList.toggle(".hidden") }>Punchline</button>  
                <div id="punchline" className="hidden">state.joke.delivery</div> 
        )}
        </>
    )
}

const mapStateToProps = state => {
    return { state }
}

export default connect(mapStateToProps, { getData })(Data)