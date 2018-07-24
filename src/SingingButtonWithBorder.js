import React from 'react'

import Border from './Border'
import SingingButton from './SinginButton'

const SingingButtonWithBorder = (props) => (

    <div>
        <Border>
            <SingingButton
            label={props.label}
            sound={props.sound}
            makeSound={props.makeSound}
            />
        </Border>
    </div>
)



export default SingingButtonWithBorder