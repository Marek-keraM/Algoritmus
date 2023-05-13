"use strict";
/*
const object = {
    1 :[1, 3, 10],
    2 :[2, 8, 7],
    3 :[2, 9, 9],
    4 :[3, 4, 2],
    5 :[4, 5, 1],
    6 :[4, 6, 10],
    7 :[5, 7, 7],
    8 :[5, 8, 9],
    9 :[5, 9, 5],
    10 :[5, 10, 4],
    11 :[5, 12, 8],
    12 :[6, 8,10],
    13 :[6, 9,11],
    14 :[6, 11, 7],
    15 :[7, 13, 4],
    16 :[8, 11, 2],
    17 :[8, 13, 7],
    18 :[9, 11, 3],
    19 :[9, 13, 2],
    20 :[10, 12, 10],
    21 :[11, 13, 19],
    22 :[12, 13, 18],
}
//console.log(object["1"],    object.length,  object);
var sizeOfObject = Object.keys(object).length;
//console.log(Object.keys(object).length);

let valueOfAllObjects = 0;
let valueOfAllPeaks = 0;
let valueOfAllEdges = 0;
let pushArray = [];

for(let i = 1; i <= sizeOfObject; i++){    //   sizeOfObject = 22
    const value = object[i];
    //console.log(value,value.keys());
    //console.log(value[2]);
    valueOfAllObjects += value[2];
    valueOfAllEdges += value[1];
    valueOfAllPeaks += value[0];
}

console.log(valueOfAllObjects,valueOfAllEdges,valueOfAllPeaks); // 165  -   208   -   133
*/

const piLine = document.querySelector(".piLine");

document.getElementById("files").onchange = function(){
    //var fileObjects = {};

    let file = this.files[0];

    let reader = new FileReader();

    reader.onload = function(){
        var fileArray = [];
        var empty = [];

        fileArray = this.result;
        console.log(fileArray,typeof(fileArray),fileArray.length);

        const emptyArray = fileArray.split("\r");
        empty = emptyArray;

        //  "12 45 900".split("\r")[0].split(" ")

        //  "12 45 900".replaceAll("\r", "").split(" ")

        var tryArray = [];
        var valueOfEdges = 0;
        let cisloPozadovanehoVrchola = 13;  //13 - 1
        const pozadovanaHodnota = [];

        for (let k = 0; k < empty.length; k++) { //empty.length - 1
            let calculatingVrchu;    

            //console.log(empty[k]);
            //tryArray.push(empty[k]);
            calculatingVrchu = empty[k];

            const enter = calculatingVrchu.split(" ");
            valueOfEdges += Number(enter[1]);
            //console.log(enter[1]);

            if(k === cisloPozadovanehoVrchola){
                pozadovanaHodnota.push(enter[1]);
            }

        }
        piLine.innerHTML = `Vypocet vsetkych vrcholov je ${valueOfEdges}.`;
        console.log(valueOfEdges);
        console.log(typeof(emptyArray),typeof(empty[1]));
        //console.log(trueArray);
        //const emptyArray2 = emptyArray.split("\n");
        //const emptyArray2 = emptyArray.split(" ");
        
        console.log(emptyArray,emptyArray[0],emptyArray[1]);
        console.log(Object.assign({}, emptyArray));
        console.log(pozadovanaHodnota);

        var resultb = {}
        emptyArray.forEach(i => {
            i = i.replace("↵", "")
            var [zac, ciel, hodnota] = i.split(" ");
            //console.log(zac, ciel, hodnota)
            if (zac in resultb) {
                resultb[zac] = {...resultb[zac], [ciel]: hodnota}
            } else {
                resultb[zac] = { [ciel]: hodnota }    
            }
        })
        console.log(resultb);

    }
    reader.readAsText(file);
    //const fileStore = reader.readAsText(file);
    //const fileStore2 = reader.readAsArrayBuffer(file);
    //console.log(reader.readAsBinaryString(file));
    //fileArray.push(reader.readAsText(file));

}

// zaciatok koniec cena
