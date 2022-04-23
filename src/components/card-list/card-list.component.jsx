import './card-list.styles.css';

const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map((monster) => {
                // Destructing. so we can change it in one place.
                const {name, email, id} = monster;
                return (
                    <div className="card-container" key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
            )})}
        </div>
    )
}


export default CardList;