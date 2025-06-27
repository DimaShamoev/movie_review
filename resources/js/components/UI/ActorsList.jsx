const ActorsList = ({ actors }) => {
    return (
        <div className="flex flex-col gap-2">
            <p
                className="text-2xl"
            >
                Actors List
            </p>
            <ul className="flex gap-2 scroll-auto ">
                {actors.map((actor) => (
                    <li key={actor.id}>
                        { actor.actor_name } { actor.actor_surname };
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ActorsList