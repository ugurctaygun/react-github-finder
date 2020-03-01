import React, { Component} from 'react'

class Search extends Component {
    state = {
        text: ""
    };
    SearchHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }
    SubmitHandler = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ""});
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.SubmitHandler}>
                    <input type="text" name="text" placeholder="Search Users.." value={this.state.text} onChange={this.SearchHandler}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search;