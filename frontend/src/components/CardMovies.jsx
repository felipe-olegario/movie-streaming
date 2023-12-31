import React from "react";
const CardMovies = ({ movie }) => {
    const posterBaseUrl = "https://image.tmdb.org/t/p/w400";

    return (
        <div>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <a href={'/detail/' + movie.id}>
                    <img src={posterBaseUrl + movie.poster_path} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </a>
            </div>
            <div className="mt-1 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-500">
                        <span>
                            {movie.title}
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default CardMovies
