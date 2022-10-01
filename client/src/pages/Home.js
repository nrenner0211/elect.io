import React from "react";

const Home = () => {
    return (
        <section className="my-5">
            <h1 id='home' className="intro">Home</h1>
            <div className='card'>
                <input type="text" id="search" class="inputValue" placeholder="Search"></input>
                <button type="submit" id="submit" class="btn button btn-info">Search</button>
            </div>
        </section>

    )
}

export default Home;