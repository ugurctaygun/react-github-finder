import React, {useState, useContext} from 'react'
import GitHubContext from '../../context/github/gitHubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const gitHubContext = useContext(GitHubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState("");
    
    const SearchHandler = (e) => {
        setText(e.target.value);
    }
    const SubmitHandler = (e) => {
        e.preventDefault();
        if(text === "") {
            alertContext.setAlert("Please enter a value", 'light')
        } else {
        gitHubContext.searchUsers(text);
        setText("");
        }   
    };

        return (
            <div>
                <form className="form" onSubmit={SubmitHandler}>
                    <input type="text" name="text" placeholder="Search Users.." value={text} onChange={SearchHandler}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {gitHubContext.users.length > 0 &&
                    <button className="btn btn-light btn-block" onClick={gitHubContext.clearUsers}>Clear</button>
                }
            </div>
        )
    
}

export default Search;