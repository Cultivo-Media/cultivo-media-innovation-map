import React from 'react'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'

import configureStore from '../redux/store'

class AppWrapper extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(AppWrapper)