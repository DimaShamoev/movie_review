import MovieCard from "../components/UI/MovieCard";
import MovieSlider from "../components/UI/MovieSlider";

const Home = ({ movies, latestMovies }) => {

    return (
        <div className="flex gap-10 flex-wrap padding-box">
            <div className="home-wrapper container flex flex-col gap-10">
                
                <div className="home-movies-slider">
                    <MovieSlider movies={latestMovies} />
                </div>

                <div className="movies-list flex flex-wrap gap-5">
                    
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}

                </div>

                

            </div>
        </div>
    )
}

export default Home