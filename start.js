const manifestGen = require('pixi-texture-manifest-gen');
const reactStart = require('react-scripts/scripts/start');
const assets = [
    {
        path:"public/assets/char/dark-knight.png",
        col:6,
        row:4,
        animations:[
                {name:"walk-fwd",start:1,end:6},
                {name:"walk-back",start:7,end:12},
                {name:"walk-right",start:13,end:18},
                {name:"walk-left",start:18,end:24}
            ]
    }
];
manifestGen.writeMany(assets,(err)=>{
    if(err){throw err;}
    reactStart();
});
