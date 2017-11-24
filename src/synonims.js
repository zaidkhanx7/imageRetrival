let synonims = require('dsv-loader!./synonims.csv');

import _ from "lodash";
let csvtoJsonSynonims=()=>{
    _.forEach(synonims, function(Obj){
        console.log("imageSearch",Obj);
});
}
export default csvtoJsonSynonims();

