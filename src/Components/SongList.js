import { Link } from "react-router-dom";

const SongList = ({songs, title}) => {
    

    return ( 
        <div className="song-list-main">

            <h2>{title}</h2>
        <div className="song-list">
            {songs.map((song)=>(
                <Link to={"/"+song.id} key={song.id}>
                <div class="card" style={{width:"8rem", margin:"5px"}}>
                <img src={song.pic} class="card-img-top" alt={song.artist +" " + song.song+" sözleri"}/>
                <div class="card-body">
                  <h5 style={{fontSize:15}} class="card-title">{song.song}</h5>
                  <Link style={{fontSize:14}} class="card-text">{song.artist}</Link>
                </div>
              </div>
                
                </Link>
            ))}
        </div>
        </div>
     );
}
 
export default SongList;