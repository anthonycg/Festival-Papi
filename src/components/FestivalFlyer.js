import React from "react"
import axios from "axios";

const FestivalFlyer = (props) => {
    
    const config = {

    }
    const handleArtistClick = (e) => {
        axios.get("https://spotify.com/xxx", {}, config)
        .then((artist) => {
            console.log(artist)
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <h1>Musical Festival Name</h1>
            <h5>This is where the flyer will go</h5>
            <a href={handleArtistClick}><p>artist Name</p></a>
        </div>
    )
}

export default FestivalFlyer;