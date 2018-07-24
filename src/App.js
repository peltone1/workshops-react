import React from 'react'

import SingingButton from './SinginButton.js'
import Border from './Border.js'

const App = () => (
  <div>
   <Border>
   <SingingButton
   label={'Przycisk1'}
   sound={'lalalalalalal'}
   />
   <SingingButton
   label={'Przycisk2'}
   sound={'psy dwa'}
   />
   </Border>
  </div>
)


export default App
