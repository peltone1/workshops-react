import React from 'react'


const DisplayArray = (props) => (
    <div>
        <ul>
            {
                props.arrName.map((string, index) => <li key={index}>{string}</li>)
            }
        </ul>
    </div>
)


export default DisplayArray