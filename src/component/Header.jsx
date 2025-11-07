import { useState } from "react";
import { Link } from "react-router-dom";

import { weatherCodeBox, getCast } from "../utils/function"


function Header() {

    const [searchSign, setSearchSign] = useState(false);

    const [valueBox, setValueBox] = useState();

    const getLoc = (e) => {

        e.preventDefault();
        getCast(valueBox);
        console.log(valueBox);

    }

    return (
        <>

            {/* ***** Search Form Area ***** */}
            <div className={searchSign ? "search-form-on" : ""}>
                <div className="dorne-search-form d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="search-close-btn" id="closeBtn">
                                    <i onClick={() => { setSearchSign(false) }} className="pe-7s-close-circle" aria-hidden="true" />
                                </div>
                                <form onSubmit={getLoc} >
                                    <input
                                        type="search"
                                        name="caviarSearch"
                                        id="search"
                                        placeholder="Search Your Desire Destinations or Events"
                                        value={valueBox}
                                        onChange={(e) => { setValueBox(e.target.value) }}
                                    />
                                    <input onClick={getLoc} type="submit" className="d-none" defaultValue="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Header Area Start ***** */}
            <header className="header_area" id="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-12 h-100">
                            <nav className="h-100 navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img className="img-res" src="img/logo.png" alt="" />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#dorneNav"
                                    aria-controls="dorneNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="fa fa-bars" />
                                </button>
                                {/* Nav */}
                                <div className="collapse navbar-collapse" id="dorneNav">
                                    <ul className="navbar-nav mr-auto" id="dorneMenu">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                    </ul>
                                    {/* Search btn */}
                                    <div className="dorne-search-btn">
                                        <a onClick={() => { setSearchSign(true) }} id="search-btn" href="#">
                                            <i className="fa fa-search" aria-hidden="true" /> Search By City
                                        </a>
                                    </div>
                                    {/* Add listings btn */}
                                    <div className="dorne-add-listings-btn">
                                        <a href="#" className="btn dorne-btn">
                                            About Mr Bing
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* ***** Header Area End ***** */}

        </>
    );
}

export default Header;