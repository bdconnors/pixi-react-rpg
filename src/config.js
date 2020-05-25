const path = require('path');
const PUBLIC_PATH = "public/";
const ASSET_PATH = "assets/";
const SOUND_PATH = path.join(ASSET_PATH,'sound/');
const CHAR_PATH =  path.join(ASSET_PATH,'char/');

const manifest =[
    {path:CHAR_PATH+"dark-knight.json",name:"dark-knight"},
    {path:SOUND_PATH+"Celestial.mp3",name:"celestial"},
    {path:SOUND_PATH+"Foggy Woods.mp3",name:"foggy"},
    {path:SOUND_PATH+"Red Carpet Wooden Floor.mp3",name:"mysteries"},
    {path:SOUND_PATH+"Red Carpet Wooden Floor.mp3",name:"red-carpet"},
    {path:SOUND_PATH+"The Arrival (BATTLE II).mp3",name:"battle-1"},
    {path:SOUND_PATH+"Windless Slopes.mp3",name:"slopes"},
    {path:SOUND_PATH+"Medieval Melancholy.wav",name:"melancholy"}
];

const assets = [
    {
        path:PUBLIC_PATH+CHAR_PATH+"dark-knight.png",
        col:6,
        row:4,
        animations:[
            {name:"walk-fwd",start:1,end:6},
            {name:"walk-back",start:7,end:12},
            {name:"walk-right",start:13,end:17},
            {name:"walk-left",start:19,end:23}
        ]
    }
];
module.exports = {};
module.exports.assets = assets;
module.exports.manifest = manifest;
module.exports.ASSET_PATH = ASSET_PATH;
module.exports.SOUND_PATH = SOUND_PATH;
module.exports.CHAR_PATH = CHAR_PATH;