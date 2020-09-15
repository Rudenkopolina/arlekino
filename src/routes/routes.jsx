import React from 'react'
import { Switch } from 'react-router'
import { urlLocations } from './urlLocations'
import RouteWrapper from './RouterWrapper'
import HomeLayout from '../layouts/AutorizedLayouts/HomeLayout/HomeLayout'
import HomePage from '../containers/HomePage/HomePage'

export default () => (
  <>
    <Switch>
      <RouteWrapper
        exact
        path={'*'}
        layout={HomeLayout}
        component={HomePage}
      />
    </Switch>

  </>
)
