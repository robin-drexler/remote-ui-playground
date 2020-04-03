import React, {useMemo, useEffect} from 'react';
import {RemoteReceiver, RemoteRenderer, useWorker} from '@remote-ui/react/host';
import {createWorkerFactory} from '@remote-ui/web-workers';
import * as components from './UI'
const createWorker = createWorkerFactory(() => import('./worker'));

export function WorkerRenderer({script}: any) {
  // @ts-ignore
  const receiver = useMemo(() => new RemoteReceiver());
  const worker = useWorker(createWorker);


  async function initWorker() {
    console.log('Going to load');
    await (worker as any).load(script);
    worker.run(receiver.receive);
  }

  useEffect(() => {
      initWorker();
  }, [receiver, worker]);

  return <RemoteRenderer receiver={receiver} components={components}/>;
}

// The "native" implementations of our remote components:

