import React from 'react';

export function isConnectedHoc<P>(WrappedComponent: React.ComponentType<P>) {
  const Component = (props: P) => {
    return <WrappedComponent {...props} />;
  };
  return Component;
}
