import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import {Provider} from 'react-redux'
import {gameState} from "./state/GameState";

const container = document.getElementById("root");

ReactDOM.render(
    <Provider store = {gameState}>
        <Game/>
    </Provider>,
    container
);