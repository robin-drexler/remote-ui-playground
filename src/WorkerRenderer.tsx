import React, { useMemo, useEffect } from "react";
import {
  RemoteReceiver,
  RemoteRenderer,
  useWorker
} from "@remote-ui/react/host";
import { createWorkerFactory } from "@remote-ui/web-workers";
import { Button, Card, TextField, DataTable } from "@shopify/polaris";

const createWorker = createWorkerFactory(() => import("./worker"));

export function WorkerRenderer({ script }: any) {
  const receiver = new RemoteReceiver();

  const worker = useWorker(createWorker);

  async function initWorker() {
    await (worker as any).load(script);
    worker.run(receiver.receive);
  }

  useEffect(() => {
    initWorker();

  }, [receiver, worker]);

  useEffect(() => {
    return receiver.listen(receiver.root, () => {
      console.log('LISTEN CB')
    });
  }, [receiver]);

  return <RemoteRenderer
        receiver={receiver}
        components={{ Button, TextField, Card, DataTable }}
      />;
}