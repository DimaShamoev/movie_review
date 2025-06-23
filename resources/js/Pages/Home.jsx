import MovieCard from "../components/UI/MovieCard";

const Home = ({ movies }) => {

    return (
        <div className="flex gap-10 flex-wrap padding-box">
            <div className="home-wrapper container">
                

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