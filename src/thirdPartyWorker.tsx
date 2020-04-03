import React from 'react';
import {RemoteRoot} from '@remote-ui/core';
import {render} from '@remote-ui/react';
// import {Button, Card} from "./UI";

// console.log(Button.type);

const Button = 'Button' as any;
const Card = 'Card' as any;

(self as any).addRenderCallback((remoteRoot: RemoteRoot) => {
  render((React.createElement('Card', null, 'hello') as any), remoteRoot);
});
