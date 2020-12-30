import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';

interface RouteProps {
  path: string;
  exact: boolean;
  isConnected: boolean;
}

export const protectRouteHoc = <P,>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Component = (props: P & RouteProps) => {
    const otherProps = (_.omit({ ...props }, [
      'path',
      'exact',
      'isConnected',
    ]) as unknown) as P;
    const routeProps = (_.omit(
      { ...props },
      _.keys({ ...otherProps })
    ) as unknown) as RouteProps;
    return (
      <Route {...routeProps}>
        {routeProps.isConnected ? (
          <WrappedComponent {...otherProps} />
        ) : (
          <div>Please connect first!</div>
        )}
      </Route>
    );
  };
  return Component;
};
