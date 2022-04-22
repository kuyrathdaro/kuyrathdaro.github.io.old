import "../styles/globals.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Chakra from "../src/components/chakra";
import Layout from "../src/components/layouts/main";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Cursor from "../src/components/ui/cursor";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/sw.js")
          .then(() => console.log("Service worker registered"))
          .catch((err) => console.error(`Service Worker Error: ${err}`));
      });
    }
  });

  return (
    <Provider store={store}>
      <Chakra>
        <Layout router={router} title="Home - Rathdaro Kuy">
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window != "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
    </Provider>
  );
}

export default MyApp;
