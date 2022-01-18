import { useEffect, useState } from "react";

function ListSearch() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://api.github.com/repositories")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                }
            )
    }, [])

    const filteredContacts = search.length === 0 ? items :
        items.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h3>CONTACTS LIST</h3>
            <input
                type="text"
                placeholder="Search name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredContacts.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListSearch;
