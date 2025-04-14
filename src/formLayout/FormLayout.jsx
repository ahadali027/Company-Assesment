import React from 'react'

import Tabs from '../components/Tabs'
import SectionWrapper from '../components/SectionWrapper'
import Form from '../Form/Form';


function FormLayout() {
  return (
    <SectionWrapper>
        <Tabs/>
        <Form/>
    </SectionWrapper>
  )
}

export default FormLayout