import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBarMain from '../components/NavBarMain/NavBarMain';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../App.css';

function SongSection() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [listOfData, setListOfData] = useState([]);
    const [genre, setGenre] = useState('rock');
    const [listGenre, setListGenre] = useState('rock');


    function handleGenreChange(event) {
        setGenre(event.target.value);
    }

    function handleListGenreChange(event) {
        setListGenre(event.target.value);
    }

    function onChangeHandler(event) {
        setSelectedFile(event.target.files[0])
    }


    async function onClickHandler() {
        const data = new FormData();
        data.append('file', selectedFile);
        data.append('genre', genre);

        const token = JSON.parse(sessionStorage.getItem('token'));

        try {
            await axios.post('http://localhost:8080/api/auth/song/user/' + sessionStorage.getItem("id"), data,
            { headers: { "Authorization": `Bearer ${token}`, }
            }
            )
            alert("File successfully uploaded!");
            window.location.reload();
        } catch(error) {
            alert("Could not upload");
            console.log(error);
        }
    }

    // base64 data wordt teruggestuurd van de server.
    // Deze functie zet de data om naar een ArrayBuffer zodat deze in een blob geplaatst kan worden
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

    const songList = listOfData.map((song, i) =>
        song.genre === listGenre &&
        <li className="listOfSongs" key={i}>
            <div>
                <h6>{song.songName}</h6>
                {/* Base64 data vanuit de server wordt omgezet naar een ArrayBuffer
                De ArrayBuffer wordt in een Blob geplaatst
                Van de Blob wordt een ObjectURL gemaakt, zodat de audio tag deze herkent */}
                <audio src={window.URL.createObjectURL(new Blob([base64ToArrayBuffer(song.data)], { type: "audio/mp3" }))} type="audio/mp3" controls />
                <h6>{song.genre},</h6>
                <h6>  Uploaded by {song.user.username}</h6>
            </div>
        </li>
    )


    if (!sessionStorage.getItem("token")) {
        return (
            <>
                <p>You have to be logged in.</p>
                <Link to="/">Back to home</Link>
            </>
        );
    } else {
        return (
            <div className="wrapper">
                <NavBarMain />
                <div>
                    <h4 className="upload-text" >Upload your audio files here!</h4>
                    <div className="upload-container" >
                        <input type="file" name="file" onChange={onChangeHandler} className="input-field-main" ></input>
                        <select value={genre} onChange={handleGenreChange}>
                            <option value="rock" >Rock</option>
                            <option value="blues" >Blues</option>
                            <option value="other" >Other</option>
                        </select>
                        <Button variant="primary" onClick={onClickHandler} className="upload-button" >Upload Song</Button>
                    </div>
                </div>
                <br /><br /><br /><br />
                <div className="genreList">
                    <h1>Please select a genre to show more songs!</h1>
                    <select value={listGenre} onChange={handleListGenreChange}>
                        <option value="rock" >Rock</option>
                        <option value="blues" >Blues</option>
                        <option value="other" >Other</option>
                    </select>
                    <div className="listOfSongs" >
                        {songList}
                    </div>
                </div>
            </div>
        );
    }
}

export default SongSection;