import Header from '../components/header'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
      </Provider>
    </>
  )
 
}

export default MyApp
