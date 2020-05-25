const manifestGen = require('pixi-texture-manifest-gen');
const startReact = require('react-scripts/scripts/start');
manifestGen.writeMany(require('../config').assets,(err)=>{
    if(err){throw err;}
    startReact();
});