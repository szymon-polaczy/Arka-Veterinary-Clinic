import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'

const apollo_client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckdyr4fjy1qq601w8hyhw0msj/master'
})

const main_theme = {
	dark: "#1b1b1b",
	light: "#ffffff",
	gray: "#2b2b2b",
	akcent: "#548493",
	secondaryFontFamily: "'Barrio', cursive"
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apollo_client}>
      <ThemeProvider theme={main_theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
