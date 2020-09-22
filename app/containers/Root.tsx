import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../store/store';
import Routes from '../Routes';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme} >
        <Routes />
      </ThemeProvider>
    </ConnectedRouter>
  </StoreProvider>
);

export default hot(Root);
