
import React from 'react';


let notes = {
    title: "Hello World (TITLE)",
    body: "Hello World (BODY)"
}

const NoteApp = () => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
}
let titleChange = (e) => {
    console.log(e.target.value)
}

let bodyChange = (e) => {
    setBody(e.target.value)
}

return (
    <div>
        Notes Title: <input type="text" onChange={titleChange}></input>
    </div>
)

np