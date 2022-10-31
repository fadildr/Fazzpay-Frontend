import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/components.css";
import "../styles/home.css";
import "../styles/history.css";
import "../styles/transfer.css";
import "../styles/profile.css";
import { Provider } from "react-redux";
import stores from "stores";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  const { store, persistor } = stores;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js%22%3E"></Script>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
