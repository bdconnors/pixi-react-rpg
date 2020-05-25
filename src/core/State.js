import { createStore } from "redux";
import {Loader,Ticker} from "pixi.js";
import {manifest} from "../config";
import View from "../model/View";
import Stage from "../model/Stage";
import Keyboard from "../model/Keyboard";
import Player from "../model/Player";
import Cache from "../model/Cache";

const initialState = {
    view:new View(),
    player:new Player(),
    stage:new Stage("loadAssets"),
    keyboard:new Keyboard(),
    assets:{
        loader:new Loader(),
        cache:new Cache()
    },
    ticker:new Ticker()
};
export const setState = (state = initialState, action) =>{
    const type = action.type;
    const payload = action.payload;
    if(type === "SET_STAGE"){
        initialState.stage.previous = initialState.stage.current;
        initialState.stage.current = payload;
    }else if(type === "QUEUE_ASSETS"){
        manifest.forEach((item)=>{
            state.assets.loader.add(item.name,item.path);
            return state;
        });
    }else if(type === "LOAD_ASSETS"){
        state.assets.loader.onProgress.add(payload.update);
        state.assets.loader.onComplete.add(payload.complete);
        state.assets.loader.load();
    }else if(type === "SET_ASSETS"){
        Object.keys(payload).map((key)=>{
            state.assets.cache[key] = payload[key];
            return state;
        });
    }else if(type === "WINDOW_RESIZE"){
        state.view.resize();
    }else if(type === "KEYBOARD_INPUT"){
        state.keyboard.update(payload);
        if(state.player.onScreen){
            state.player.update(state.keyboard);
        }
    }
    return state;
};
export default createStore(setState);
