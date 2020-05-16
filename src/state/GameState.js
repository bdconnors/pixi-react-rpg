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
    if(type === "ADD_STAGE"){
        initialState.stage.stages[payload.name] = payload.stage;
    }else if(type === "QUEUE_ASSETS"){
        manifest.forEach((item)=>{
            state.loader.add(item.name,item.path);
        });
    }else if(type === "LOAD_ASSETS"){
        state.loader.onProgress.add(payload);
        state.loader.onComplete.add(()=>{
            Object.keys(state.loader.resources).map((key)=>{
                state.assets[key] = state.loader.resources[key];
            });
        });
        state.loader.load();
    }
    return state;
};
export const gameState = createStore(setState);
