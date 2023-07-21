"use client"

import {store} from './store'
import { Provider } from 'react-redux'
import React, { useMemo } from 'react'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const Context = React.createContext({
    name: 'Default',
  });
let persistor = persistStore(store)

export function ReduxProvider({children}: {children: React.ReactNode}) {
    const contextValue = useMemo(
        () => ({
          name: 'Ant Design',
        }),
        [],
      );
    return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Context.Provider value={contextValue}>
                {children}
            </Context.Provider>
        </PersistGate>
    </Provider>
    )
}
