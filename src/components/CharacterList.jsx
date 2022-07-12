import { useEffect, useState } from 'react';
import Character from './Character';

function NavPage(props) {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <button
                className="btn btn-outline-info mb-5 mt-4"
                onClick={() => props.setPage(props.page - 1)}
            >
                 Pág {props.page}
            </button>
            <button
                className="btn btn-outline-info mb-5 mt-4"
                onClick={() => props.setPage(props.page + 1)}
            >
                Pág {props.page + 1}
            </button>
        </header>
    );
}

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${page}`
            );
            const data = await response.json();
            setCharacters(data.results);
        }

        fetchData();
    }, [page]);

    return (
        <div className="container">
            <NavPage page={page} setPage={setPage} />

            <div className="d-flex p-4 row row-cols-1 row-cols-md-2 g-4">
                {characters.map((character) => {
                    return (
                        <div className="col" key={character.id}>
                            <Character character={character} />
                        </div>
                    );
                })}
            </div>
            <NavPage page={page} setPage={setPage} />
        </div>
    );
}

export default CharacterList;
