import React from "react";
import {
  createRemoteRoot,
  RemoteRoot,
  RemoteReceiver,
  retain,
  RemoteChannel
} from "@remote-ui/core";

let renderCallback;

(self as any).addRenderCallback = (render: any) => {
  renderCallback = render;
};

export function load(script: string) {
  importScripts(script);
  return {};
}

export function run(channel: RemoteChannel) {
  retain(channel);

  const remoteRoot = createRemoteRoot(channel, {
    components: ["Button", "Card"] as any
  });
  renderCallback(remoteRoot);
}
