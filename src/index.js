import React from 'react';
import ReactDOM from 'react-dom';
import Game from './core/Game';
import {Provider} from 'react-redux'
import GameState from "./core/GameState";

const container = document.getElementById("root");

ReactDOM.render(
    <Provider store = {GameState}>
        <Game/>
    </Provider>,
    container
);