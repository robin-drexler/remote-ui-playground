import { render } from "hops";
import React, { useEffect, useState } from "react";
import { WorkerRenderer } from "./WorkerRenderer";
import { createPlainWorkerFactory } from "@remote-ui/web-workers";
import "@shopify/polaris/styles.css?global";

import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page } from "@shopify/polaris";

const thirdPartyWorker = createPlainWorkerFactory(() =>
  import("./thirdPartyWorker")
);

const App = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Remote UI example">
        <div>
          {mounted && <WorkerRenderer script={thirdPartyWorker.url.href} />}
        </div>
      </Page>
    </AppProvider>
  );
};

export default render(<App />);
