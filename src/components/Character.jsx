function Character({ character }) {
    return (
        <div className="card mb-3 m-2" style={{ backgroundColor: '#262a2d' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        className="img-fluid rounded-start h-100 w-100"
                        src={character.image}
                        alt={character.name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body p-2">
                        <h3 className="card-title text-white ">
                            {character.name}
                        </h3>
                        <h6 className="card-text text-secondary">
                            Especie:
                            <p>{character.species}</p>
                        </h6>
                        <h6 className="card-text text-secondary">
                            Estado:
                            <p>{character.status}</p>
                        </h6>
                        <h6 className="card-text text-secondary">
                            Origen:
                            <p>{character.origin.name}</p>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;
