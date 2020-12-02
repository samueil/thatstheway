import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import '../styles/globals.css'

export default function RoutesApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}