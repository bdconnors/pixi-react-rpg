const ASSET_PATH = "assets/";
const SHEET_PATH = ASSET_PATH+"sheet/";
const SOUND_PATH = ASSET_PATH+"sound/";
const IMAGE_PATH = ASSET_PATH+"image/";
const CHAR_PATH = SHEET_PATH+"char/";
const PROP_PATH = SHEET_PATH+"prop/";

export const manifest =[
    {path:CHAR_PATH+"arch/arch-atk.json",name:"arch-atk"},
    {path:CHAR_PATH+"arch/arch-idle.json",name:"arch-idle"},
    {path:CHAR_PATH+"barb/barb-idle.json",name:"barb-idle"},
    {path:CHAR_PATH+"knight/knight-idle.json",name:"knight-idle"},
    {path:PROP_PATH+"village/village-prop-1.json",name:"village-prop-1"},
    {path:SOUND_PATH+"Celestial.mp3",name:"celestial-1"},
    {path:SOUND_PATH+"The Arrival (BATTLE II).mp3",name:"battle-1"},
    {path:SOUND_PATH+"Red Carpet Wooden Floor.mp3",name:"upbeat-1"},
    {path:SOUND_PATH+"Windless Slopes.mp3",name:"upbeat-2"},
    {path:SOUND_PATH+"Nocturnal Mysteries.mp3",name:"mysterious-1"},
    {path:SOUND_PATH+"Foggy Woods.mp3",name:"mysterious-2"},
    {path:IMAGE_PATH+"night-sky.json",name:"night-sky"}
];