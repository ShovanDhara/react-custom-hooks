import React, { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/posts';

export default function DataPagination() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => setPosts(posts))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>{error}</h1>;

    if (!posts.length) return <h1>Loading...</h1>

    return <div>
        {posts.length > 0 ? (
            <>
                <Pagination
                    data={posts}
                    RenderComponent={Post}
                    pageLimit={5}
                    dataLimit={10}
                />
            </>
        ) : (
            <h1>No Posts to display</h1>
        )}
    </div>;
}

function Post(props) {
    const { id, title, body } = props.data;
    return (
        <div className="post">
            <small>{id}</small>
            <div className='post-data'>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    return (
        <div>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent key={idx} data={d} />
                ))}
            </div>

            <div className="pagination">
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        </div>
    );
}