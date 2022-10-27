import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/components.css";
import "../styles/home.css";
import "../styles/history.css";
import { Provider } from "react-redux";
import stores from "stores";
const { store, persistor } = stores;
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
