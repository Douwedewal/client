import React, { useState, useEffect } from 'react';
import NavBarMain from '../components/NavBarMain/NavBarMain';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './style.css';

function UserHome() {

    const [listOfData, setListOfData] = useState([]);

    useEffect(() => {
        let isMounted = true;
        axios.get('http://localhost:8080/api/auth/song/allsongs')
            .then(res => {       
                if (isMounted) {
                    setListOfData(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function base64ToArrayBuffer(base64) {
        let binaryString = window.atob(base64);
        let binaryLen = binaryString.length;
        let bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
            let ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }

    async function deleteSong(id) {

        const token = JSON.parse(sessionStorage.getItem("token")); 

        try {
            await axios.delete('http://localhost:8080/api/auth/song/' + id, 
            { headers: { "Authorization": `Bearer ${token}`, }});
            alert("Song Deleted!");
            window.location.reload();
        } catch (err) {
            console.log(err);
            alert("Could not delete song!");
        }
    }

    const songList = listOfData.map((song, i) =>
        // Stringify, omdat de id vanuit de server geen string is maar een integer
        JSON.stringify(song.user.userId) === sessionStorage.getItem("id") &&
        <li className="listOfSongs" key={i}>
            <div>
                <h6>{song.songName}</h6>
                {/* Base64 data vanuit de server wordt omgezet naar een ArrayBuffer
                De ArrayBuffer wordt in een Blob geplaatst
                Van de Blob wordt een ObjectURL gemaakt, zodat de audio tag deze herkent */}
                <audio src={window.URL.createObjectURL(new Blob([base64ToArrayBuffer(song.data)], { type: "audio/mp3" }))} type="audio/mp3" controls />
                <h6>{song.genre},</h6>
                <h6>  Uploaded by {song.user.username}</h6>
                {/* <Button variant="primary" className="ml-5" onClick={() => deleteSong(song.id)}>Delete Song</Button> */}
            </div>
        </li>
    )




    if (sessionStorage.getItem("token")) {
        return (
            <div className="wrapper">
                <NavBarMain />
                <h1>Welcome, {sessionStorage.getItem("username")}</h1><br />
                <div className="info-song-section">
                    <div>
                        <h4>Your information:</h4>
                    </div>
                    <div className="listOfSongs" >
                        <h4>Your songs</h4>
                        {songList}
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <p>Not authorized for this content</p>
        )
    }
}

export default UserHome;