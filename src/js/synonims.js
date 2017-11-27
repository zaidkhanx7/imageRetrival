let synonims = require('dsv-loader!../csvFiles/synonims.csv');

import _ from "lodash";
let csvtoJsonSynonims=()=>{
    _.forEach(synonims, function(Obj,index){
        Obj.Keyword=Obj.Keyword.split(" ");
        console.log("imageSearch",Obj.Keyword);
});
}
export default csvtoJsonSynonims();

