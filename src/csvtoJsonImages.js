let data = require('dsv-loader!./image_tags.csv');
import _ from "lodash";
let csvtoJson=()=>{
    _.forEach(data, function(Obj){
        let keyValues=_.keysIn(Obj);
        _.forEach(keyValues, function(value){
            if(Obj[value]=== "0"){
                delete Obj[value];
            }
        });
    });
    return data;
}
export default csvtoJson();

