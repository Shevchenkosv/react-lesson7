import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducers/reducer";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    count: reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer
)
export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)