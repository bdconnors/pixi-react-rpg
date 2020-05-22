import React from 'react';
import ReactDOM from 'react-dom';
import 'pixi.js';
import 'pixi-sound';
import Game from './core/Game';
import {Provider} from 'react-redux'
import GameState from "./state/GameState";
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js'

const container = document.getElementById("root");

ReactDOM.render(
    <Provider store = {GameState}>
        <Game/>
    </Provider>,
    container
);