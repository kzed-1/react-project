//import the React and ReactDOM Libraries 

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'


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
            <CommentDetail 
                name = {faker.name.firstName()} 
                comment = {faker.lorem.sentence()}
                time = "6:00PM"
            />
            <CommentDetail 
                name = {faker.name.firstName()} 
                comment = {faker.lorem.sentence()}
                time = "6:00PM"
            />
            <CommentDetail 
                name = {faker.name.firstName()} 
                comment = {faker.lorem.sentence()}
                time = "6:00PM"
            />

        </div>
    )
}

// Take the react component and show it on the screen 

ReactDOM.render(<App />, document.querySelector('#root'))