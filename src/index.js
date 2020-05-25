import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'pixi.js';
import 'pixi-sound';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
//core files
import Game from './core/Game';
import State from "./core/State";

const container = document.getElementById("root");


ReactDOM.render(
    <Provider store = {State}>
        <Game/>
    </Provider>,
    container
);