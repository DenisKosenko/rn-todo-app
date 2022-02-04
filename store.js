// import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducers';

export default function configureStore(){

    return createStore(reducer);
}