import jsonexport from "./csvtoJsonImages.js";
let synonims = require('dsv-loader!../csvFiles/synonims.csv');
const leven = require('leven');
const markup = `
  <div class="card">
        <input type="text" placeholder="Enter the text to be searched "  id="searchbox"/>
        <button onclick="clicked()" class="searchbutton">search</button>
        <div id="imageRenderer"> 
	</div>
    </div>
`;

document.body.innerHTML = markup;

window.clicked=()=>{
    let comparisonInput='';
    let searchinput= document.getElementById("searchbox");
    let searchinputvalue=searchbox.value.toLowerCase().trim();
    searchinputvalue=UnderStandingInput(searchinputvalue);
    comparisonInput=comparison(searchinputvalue|| '');
    keyWordSearch(comparisonInput);
}


/*
UnderStandingInput()->
    This method is used understand the input from search box, whether it has spaces ,
    or keyword 'or'between words through regular Expressions .
    In javascript support regular Expression , by Using javascript Regex.
*/

let UnderStandingInput=(inputVal)=>{
    console.log(inputVal);
    if(/\b \b/.exec(inputVal)){
        inputVal=inputVal.split(" ");
        console.log("true wpacing b.w letter",);
    } else if(/\b or \b/.exec(inputVal)){
        inputVal=inputVal.split("or");
    } else {
        inputVal=inputVal.split(" ");
        console.log("understanding ", inputVal);
    }
    return inputVal;
}


let comparison=(stringArr)=>{
    if(true){
        let comparisonArr=[];
        _.forEach(synonims, function(Obj,index){
            let keywordArr=Obj.Keyword.split(" ");
            _.forEach(stringArr,function(stringVal){
                _.forEach(keywordArr,function(arrVal){
                    arrVal=arrVal.trim();
                    stringVal=stringVal.trim();
                    if(leven(stringVal,arrVal)<3){
                        let comparisonObject={};
                        comparisonObject.imageName=Obj.imageTags;
                        comparisonObject.leven=leven(stringVal,arrVal);
                        comparisonArr.push(comparisonObject);
                        console.log("strinVal and arrVal",stringVal,arrVal,leven(stringVal,arrVal),Obj);
                    }
                });

            });
        });
        comparisonArr=comparisonArr.sort(function(a,b){
            return a.leven > b.leven ;
        });
        console.log(comparisonArr);
        return comparisonArr;
    }else{
        alert("Please enter valid input ");
    }
}

let keyWordSearch=(Arr)=>{
    _.forEach(Arr,function(value){
        _.forEach(jsonexport,function(mainObj){
        });
    });
}


let imageRender=(Arr)=>{
    let imageRenderer=document.getElementById("imageRenderer");
    Arr.forEach(function(value){
        var img = new Image();
        img.src = "../images/"+value.imageFileName;
        img.setAttribute("class", "images");
        imageRenderer.appendChild(img);
    });
}


