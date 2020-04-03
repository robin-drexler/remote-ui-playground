import React, {ReactNode} from "react";
import {createRemoteReactComponent} from '@remote-ui/react';

export function Card({children}: { children: ReactNode }) {
  return <div className="Card">{children}</div>;
}

export function Button({
                         children,
                         onPress,
                       }: {
  children: ReactNode;
  // Functions passed over @remote-ui/rpc always return promises,
  // so make sure it’s a considered return type.
  onPress(): void | Promise<void>;
}) {
  return (
    <button type="button" onClick={() => onPress()}>
      {children}
    </button>
  );
}

// export const Button = createRemoteReactComponent()
