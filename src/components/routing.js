import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Posts from './Posts';
import Forms from './Forms';
import PostDetails from './PostDetails';

const routing = () => {
    let style = {
        listStyle: 'none'
    }
    return (
        <div className="container">
            <BrowserRouter>
                <header>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="#">Edureka</a>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to={'/'} className="nav-link"> Home </Link></li>
                                    <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
                                    <li><Link to={'/posts'} className="nav-link">Posts</Link></li>
                                    <li><Link to={'/forms'} className="nav-link">Forms</Link></li>
                                </ul>
                            </div>
                        </nav>
                </header>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/post/:id" component={PostDetails} />
                    <Route path="/forms" component={Forms} />
                </div>
            </BrowserRouter>
        </div>

    )
}
export default routing;
