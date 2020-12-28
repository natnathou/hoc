import React from 'react';
import { Router as RouterReactDom } from 'react-router-dom';
import history from '../history/History';

interface RouterProps {
  children?: any;
}
const Router = ({ children }: RouterProps) => {
  return <RouterReactDom history={history}>{children}</RouterReactDom>;
};

export default Router;
