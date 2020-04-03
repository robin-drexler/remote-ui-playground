import {render} from 'hops';
import React, {useEffect, useState} from 'react';
import {WorkerRenderer} from "./WorkerRenderer";
import {createPlainWorkerFactory} from "@remote-ui/web-workers";

const thirdPartyWorker = createPlainWorkerFactory(() => import('./thirdPartyWorker'));

console.log(thirdPartyWorker.url)

const App = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <div>
      hello
      <div>
        {mounted && <WorkerRenderer script={thirdPartyWorker.url.href}/>}
      </div>
    </div>)
}

export default render(<App/>);
