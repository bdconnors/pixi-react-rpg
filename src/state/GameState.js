import { createStore } from "redux";
import {Loader,Ticker} from "pixi.js";
import {manifest} from "../config";

const initialState = {
    view:{
        width:window.innerWidth ,
        height:window.innerHeight
    },
    stage:{
        current:"loadAssets",
        previous:null
    },
    assets:{
        loader:new Loader(),
        cache:{}
    },
    ui:{
        panel:{
            background: "linear-gradient(to top left, #0000b0 0%, #4949c7 100%)",
            borderColor:"light",
            textColor:"#fff"
        }
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
    }
    return state;
};
export default createStore(setState);
