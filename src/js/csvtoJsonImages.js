let data = require('dsv-loader!../csvFiles/image_tags.csv');
import _ from "lodash";
let csvtoJson=()=>{
    _.forEach(data, function(Obj){
        let keyValues=_.keysIn(Obj);
        _.forEach(keyValues, function(value){
            if(Obj[value]=== "0"){
                delete Obj[value];
            }
        });
        Obj.appended=false;
    });
    return data;
}
export default csvtoJson();

