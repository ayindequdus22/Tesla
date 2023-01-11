import React from 'react'
import styledComponents from 'styled-components'
import Header from './Header'
import Section from './Section'
function Home() {
  return (<>
    <Header/>
    <Container>
        <Section
        title="Model S"
        description ="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        LeftBtnText="Custom order"
        RightBtnText="Existing Inventory"
        
        />
  
    </Container>
    </>
  )
}

export default Home
const Container = styledComponents.div`
height:100vh;
`