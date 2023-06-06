import SongList from "../Components/SongList";
import useFetch from "../Components/useFetch";

const Home = () => {
    const {data, error, isLoading} = useFetch("http://localhost:8000/songs");

    return ( 
        <div className="home">
            {isLoading&&(
                <div>
                <div style={{height:"350px"}} className="song-list-main">
                    <div className="song-list">
                    ...

                    </div>
                </div>
                <div style={{height:"350px"}} className="song-list-main">
                <div className="song-list">
                ...

                </div>
            </div>

                </div>
            )}
            {error && !isLoading && (
                <div>
                    {error}
                </div>
            )}
            {data && (
            <div>
            <SongList songs={data.slice(0,20)} title="Yeni Şarkı Sözleri"/>
            <SongList songs={data.slice(0,20)} title="Popüler Şarkı Sözleri"/>
            </div>
            )}
        
        </div>
     );
}
 
export default Home;