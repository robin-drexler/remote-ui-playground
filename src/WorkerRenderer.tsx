import React, { useMemo, useEffect } from "react";
import {
  RemoteReceiver,
  RemoteRenderer,
  useWorker,
} from "@remote-ui/react/host";
import { createWorkerFactory } from "@remote-ui/web-workers";
import { Button, Card, TextField, DataTable, Spinner } from "@shopify/polaris";
const createWorker = createWorkerFactory(() => import("./worker"));

function Container({ children }: any) {
  return children;
}

export function WorkerRenderer({ script }: any) {
  // @ts-ignore
  const receiver = useMemo(() => new RemoteReceiver());
  const worker = useWorker(createWorker);

  async function initWorker() {
    await (worker as any).load(script);
    worker.run(receiver.receive);
  }

  useEffect(() => {
    initWorker();
  }, [receiver, worker]);

  return (
    <RemoteRenderer
      receiver={receiver}
      components={
        {
          Button,
          Card,
          TextField,
          DataTable,
          Spinner,
          Container,
          button: "button",
        } as any
      }
    />
  );
}
