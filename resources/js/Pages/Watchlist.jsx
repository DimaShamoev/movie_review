import MovieUi from "../components/UI/MovieUi";

const Watchlist = ({ watchlist }) => {
    return (
        <div className="watchlist padding-box">
            <div className="watchlist-wrap container flex gap-5 flex-wrap">
                { watchlist.map(watchlist => (
                    <MovieUi key={watchlist.id} watchlist={watchlist} />
                )) }
            </div>
        </div>
    );
};


export default Watchlist