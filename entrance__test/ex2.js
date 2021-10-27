function alternatingSums(a) {
    let arrTeam1 = [];
    let arrTeam2 = [];
    for(let i = 0; i < a.length; i++) {
        if(i%2==0) {
            arrTeam1.push(a[i]);
        }
        else if(i%2!=0) {
            arrTeam2.push(a[i]);
        }
    }
    let sumTeam1 = 0;
    let sumTeam2 = 0;
    let arr_bothTeam = [];
    for(let i = 0; i < arrTeam1.length; i++) {
        sumTeam1 = sumTeam1 + arrTeam1[i];
    }
    arr_bothTeam.push(sumTeam1);
    for(let i = 0; i < arrTeam2.length; i++) {
        sumTeam2 = sumTeam2 + arrTeam2[i];
    }
    arr_bothTeam.push(sumTeam2);
    console.log(arr_bothTeam);
}


alternatingSums([10,23,30,33,20,49,70,44,80,93]);