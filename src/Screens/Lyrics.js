import { Link, useParams } from "react-router-dom";
import useFetch from "../Components/useFetch";
import { useEffect } from "react";

const Lyrics = () => {
    const { id } = useParams();
    const { data: song, isLoading, error } = useFetch("http://localhost:8000/songs/" + id)
    useEffect(() => {
        if (document.getElementById("lyrics")) {
            document.getElementById("lyrics").innerHTML = song.lyrics;
        }

    }, [song]);
    return (

        <div className="lyrics-area">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {
                song && (
                    <div>
                        <div>
                            <div style={{ display: "flex", borderRadius: "10px",margin:"10px" }}>
                                <img style={{ margin: "3%", width: "calc(20% + 60px)", maxWidth: "250px", height: "calc(20% + 50px)", boxShadow: "8px 8px  8px", borderRadius: "10px" }} className="card-img-top" src={song.pic} alt={song.artist + " " + " - " + song.song + " Şarkı Sözleri"} />
                                <div style={{ margin: "3% 0", display: "flex", flexDirection: "column", textAlign: "start", padding: "20px", justifyContent: "start" }}>
                                    <h2 style={{ fontSize: "calc(50% + 2vw)", fontWeight: "bold" }}>{song.artist + " " + " - " + song.song + " Şarkı Sözleri"}</h2>
                                    <div style={{display:"flex",fontSize: "calc(60% + 0.8vw)"}}>
                                    Sanatçı: 
                                    <Link style={{ paddingLeft:"5px"}}>{song.artist}</Link>
                                        
                                    </div>
                                    <div style={{display:"flex",fontSize: "calc(60% + 0.8vw)"}}>
                                    Ekleyen: 
                                    <Link style={{ paddingLeft:"5px" }}>  Mahmut</Link>

                                    </div>

                                </div>


                            </div>
                            <div style={{flex:"4", display: "flex", flexWrap: "wrap" }}>
                                <div style={{ flex:"3", minWidth:"380px"}} id="lyrics" className="lyrics ly-body">...</div>
                                <div style={{ flex:"1",minWidth:"270px"}} className="lyrics ly-sidebar">
                                    <h3>Yeni Şarkı Sözleri</h3>
                                </div>
                            </div>
                        </div>


                    </div>

                )


            }
        </div>
    );
}

export default Lyrics;