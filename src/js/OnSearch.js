import jsonexport from "./csvtoJsonImages.js";
let synonims = require('dsv-loader!../csvFiles/synonims.csv');
const leven = require('leven');
const markup = `
  <div class="card">
        <input type="text" placeholder="Enter the text to be searched "  id="searchbox"/>
        <button onclick="clicked()" class="searchbutton" id="idSearch">Text Search</button>
        <button onclick="imageSubmitted()" class="invisible" id="imgSearchs"> submit Image</button>
        <button onclick="imageclicked()" class="searchbutton" style="margin-left: 6px;" id="imgsearch">Image Search</button>
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
    resetData();
}
window.imageclicked=()=>{
    let searchinput= document.getElementById("searchbox");
    let inputSearch= document.getElementById("idSearch");
    let imgSearch= document.getElementById("imgSearchs");
    let imgsearch= document.getElementById("imgsearch");
    inputSearch.style.display = 'none';
    searchinput.setAttribute("type","file");
    searchinput.setAttribute("name","pic");
    searchinput.setAttribute("accept","image");
    imgSearch.setAttribute("class","visible");
    imgsearch.setAttribute("class","invisible");
    idSearch.AddEventListener()
    console.log("image Clicked!!!!!!!!!!!!!");
}
window.imageSubmitted=()=>{
    console.log("image Submitted !!!");
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
        if(comparisonArr.length > 1){
            comparisonArr=comparisonArr.sort(function(a,b){
                return a.leven > b.leven ;
            });
        }
        return comparisonArr;
    }else{
        alert("Please enter valid input ");
    }
}

let keyWordSearch=(Arr)=>{
    let imageRenderer=document.getElementById("imageRenderer");
    imageRenderer.innerHTML=" ";
    for(let i =0; i<=3;i++){
        imageRender(Arr,i);
    }
}


let imageRender=(Arr,i)=>{
    _.forEach(jsonexport,function(mainObj){
        let match=i;
        _.forEach(Arr,function(value,index,arr){
            let val=value.imageName;
            if(mainObj[val]==="1") {
                match=match+=1;
                if(match === arr.length && mainObj.appended !== true){
                    console.log("mainObj", mainObj)
                    console.log("inside loop");
                    mainObj.appended=true;
                    let img = new Image();
                    let span=document.createElement('div');
                    span.innerHTML=mainObj.imagesNames;
                    img.src = `${window.location}/src/images/${mainObj.imagesNames}.png`;
                    img.name="text1"
                    span.setAttribute("class", "imagesdes");
                    img.setAttribute("class", "images");
                    imageRenderer.appendChild(span);
                    span.appendChild(img);
                }
            }
        });
    });
}

let resetData=()=>{
    _.forEach(jsonexport,function(mainObj){
        mainObj.appended=false;
    })

}


