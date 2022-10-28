import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/components.css";
import "../styles/home.css";
import "../styles/history.css";
import "../styles/transfer.css";
import { Provider } from "react-redux";
import stores from "stores";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const { store, persistor } = stores;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
