import React, { Fragment } from 'react'
import { Layout } from '../components/Layouts/Layouts'
import { WellcomeSection } from '../components/Layouts/Content/Home/WellcomeSection/WellcomeSection'
import { FeatuersSection } from '../components/Layouts/Content/Home/FeatuersSection/FeatuersSection'
import { StoriesSection } from '../components/Layouts/Content/Home/StoriesSection/StoriesSection'
import { observer } from 'mobx-react-lite'

const Home = observer(() => {

  return (
    <Fragment>
      <WellcomeSection />
      <FeatuersSection />
      <StoriesSection />
    </Fragment>
  )
})

export default Home