import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer';
// import {themeReducer} from '../Reducer/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = composeWithDevTools();

const persistCommonConfig = {
    key: 'root',
    storage: storage,
};

const persitedReducer = persistReducer(persistCommonConfig, rootReducer);
const store = createStore(persitedReducer,composeEnhancers);

export const persistor = persistStore(store);
export default store;