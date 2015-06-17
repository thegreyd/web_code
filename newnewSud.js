var baseNum=9;

var grid=Array(baseNum),
    positions=Array(baseNum);

function initiateGrid(){   

    for(i=0;i<baseNum;i++){
        grid[i]=Array(baseNum);
    }


    for(i=0;i<(baseNum*baseNum);i++){
        positions[i]=Array(2);
    }

    var count1=0;
    while(count1<positions.length){
        for(i=0;i<baseNum;i++){
            var count2=0;
            while(count2<baseNum){
                positions[count1][0]=i;
                positions[count1][1]=count2;
                count2++;
                count1++;
            }
        }
    }
}

function Rand(a,b){
    return Math.floor(Math.random()*a+b);
}

function assign(){
    for(i=0;i<30;i++){
        var coord=positions[Rand(positions.length,0)];
        var assign_row=coord[0];
        var assign_col=coord[1];
        var value=checkVal(assign_row,assign_col);
        grid[assign_row][assign_col]=value;
        if(!value){break;}
        var index_coord = positions.indexOf(coord);
        positions.splice(index_coord,1);
    }
}

function checkVal(row,col){
    var choice=[1,2,3,4,5,6,7,8,9];
    for(var i in grid[row]){
        if(grid[row][i]){
        var index_ele=choice.indexOf(grid[row][i]);
        choice.splice(index_ele,1);
        }
    }
    for(var j in grid){
        if(grid[j][col]){
        var index_ele=choice.indexOf(grid[j][col]);
        choice.splice(index_ele,1);
        }
    }
    
    var true_val=choice[Rand(choice.length,0)];
    //console.log(row,col,choice,val);
    return true_val;
}

function blanks(){
    for(i=0;i<baseNum;i++){
        for(j=0;j<baseNum;j++){
            if(!grid[i][j]){
                grid[i][j]="_";
            }
        }
    }
}

function play(){
    initiateGrid();
    assign();
    blanks();
    for(var i in grid){
        console.log("  |"+grid[i]+"|");
    }
}

play();