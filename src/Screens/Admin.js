import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
    const navigate = useNavigate();

    const [artist, setArtist] = useState();
    const [song, setSong] = useState();
    const [pic, setPic] = useState();
    const [lyrics, setLyrics] = useState();
    const [lyricsValue, setLyricsValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { artist, song, pic, lyrics };
        fetch("http://localhost:8000/songs",
            {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(blog),
            }).then(() => navigate("/"));
    }

    return (
        <div className="admin-panel">
            <div className="admin-sidebar">
            </div>
            <div className="admin-main">
                <div className="add">
                    <form onSubmit={handleSubmit} className="form">
                        <h2>Add Lyrics</h2>
                        <label class="form-label">Artist</label>
                        <input value={artist} onChange={(e) => setArtist(e.target.value)} class="form-control" type="text" required />
                        <label class="form-label">Song</label>
                        <input value={song} onChange={(e) => setSong(e.target.value)} class="form-control" type="text" required />
                        <label class="form-label">Pic</label>
                        <input value={pic} onChange={(e) => setPic(e.target.value)} class="form-control" type="text" />
                        <label class="form-label">Lyrics</label>
                        <textarea id="lyrics-text-area" style={{ whiteSpace: "pre-wrap" }} value={lyricsValue} onChange={(e) => {
                            setLyricsValue(e.target.value);
                        }} class="form-control" cols="30" rows="5" required></textarea>
                        <button onClick={() => {
                            setLyrics(document.getElementById("lyrics-text-area").innerHTML.replace(/\n/g, "<br>"));
                        }} style={{ margin: "10px 0" }} class="btn btn-primary">Add</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Admin;