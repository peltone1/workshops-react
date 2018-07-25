import React from 'react'
import HelloWorld from './HelloWorld.js'
import DisplayName from './DisplayName.js'
import DisplaArray from './DisplayArray.js'
import SingingButtonWithBorder from './SingingButtonWithBorder.js'
import WhatReactRenders from './WhatReactRenders.js'

const BasicComponents = (props) => (
    <div>
        <h1>Basic Components</h1>
        <HelloWorld />
        <DisplaArray
            listOfNames={['ola', 'ala', 'ula']}
        />
        <DisplayName />
        <SingingButtonWithBorder
            label= {'sound'}
        sound={'trololo'}
        />
        <WhatReactRenders />


    </div>
)

export default BasicComponents