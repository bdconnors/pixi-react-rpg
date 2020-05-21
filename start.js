const manifestGen = require('pixi-texture-manifest-gen');
const reactStart = require('react-scripts/scripts/start');
const assets = [
    {path:"public/assets/sheet/char/arch/arch-atk.png",frames:14,animations:[{name:"atk",start:1,end:14}]},
    {path:"public/assets/sheet/char/arch/arch-dash.png",frames:14,animations:[{name:"dash",start:1,end:14}]}
];
manifestGen.writeMany(assets,(err)=>{
    if(err){throw err;}
    reactStart();
});
