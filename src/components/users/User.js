import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos'

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    };

    render() {
        const {
            login,
            name,
            avatar_url,
            location,
            blog,
            bio,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company,
        } = this.props.user;

        const { loading } = this.props;

        if(loading) {
            return (<Spinner/>)
        }

        return (
            <React.Fragment>
                <Link to='/' className="btn btn-light">
                    Back to Search
                </Link>
                Hireable: {''}
                {hireable ? (<i className="fas fa-check text-success" />) : 
                (<i className="fas fa-times-circle text-danger"/>)
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt={name} title={name} style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <React.Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                                </React.Fragment>}
                        <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <React.Fragment>
                                    <b>Username:</b> {login}
                                    </React.Fragment>}
                            </li>
                            <li>
                                {company && <React.Fragment>
                                    <b>Company:</b> {company}
                                    </React.Fragment>}
                            </li>
                            <li>
                                {blog && <React.Fragment>
                                    <b>Website:</b> {blog}
                                    </React.Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Gists: {public_gists}</div>
                </div>
                <Repos repos={this.props.repos}/>
            </React.Fragment>
        );
    };
};

export default User;