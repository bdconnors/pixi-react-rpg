import { createStore } from "redux";
import {Loader,Ticker} from "pixi.js";
import {manifest} from "../config";

const initialState = {
    view:{
        width:600,
        height:400
    },
    stage:{
        current:"load",
        previous:null,
        stages:{}
    },
    assets:{},
    loader:new Loader(),
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
            state.loader.add(item.name,item.path);
            return state;
        });
    }else if(type === "LOAD_ASSETS"){
        state.loader.onProgress.add(payload.update);
        state.loader.onComplete.add(payload.complete);
        state.loader.load();
    }else if(type === "SET_ASSETS"){
        Object.keys(payload).map((key)=>{
            state.assets[key] = payload[key];
            return state;
        });
    }
    return state;
};
export const gameState = createStore(setState);
