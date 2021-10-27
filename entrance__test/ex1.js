
function allLongestString(arr) {
    let tempArr = [];
    let outputArr = [];
    for(let i = 0; i < arr.length; i++) {
        tempArr.push(arr[i].length);
    }
    tempArr = tempArr.sort()
    tempArr = tempArr.filter(num => !(num < tempArr[tempArr.length-1]));
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === tempArr[0]) {
            outputArr.push(arr[i]);
        }
    }
    console.log(outputArr);
}

allLongestString(["HAI","QUANG","QUAN","LONG","ROBINSON","JESSICA","CHRIS"]);