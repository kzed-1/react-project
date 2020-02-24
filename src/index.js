//import the React and ReactDOM Libraries 

import React from 'react';
import ReactDOM from 'react-dom';


//create a react component

// const App = () => {
//     return (
//         <div>
//             <label className ="label">
//                 Enter Name:
//             </label>
//             <input id = "name" type ="text"></input>
//             <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
//         </div>
//     )
// }

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href = "/" className="avatar">
                    <img alt= "avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className = "metadata">
                        <span className = "date"> Today at 6:00PM</span>
                    </div>
                    <div className="text"> Nice blog post!</div>
                </div>

            </div>
        </div>
    )
}

// Take the react component and show it on the screen 

ReactDOM.render(<App />, document.querySelector('#root'))