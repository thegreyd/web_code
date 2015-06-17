var baseNum=9;

var grid=Array(baseNum),
    grid_col=Array(baseNum),
    positions=Array(baseNum);

function initiateGrid(){   

    for(i=0;i<baseNum;i++){
        grid[i]={elements:Array(baseNum),choice:[]}
        grid_col[i]={elements:Array(),choice:[]}
        for(j=0;j<baseNum;j++){
            grid[i].choice.push(j+1);
            grid_col[i].choice.push(j+1);
        }
        
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
        grid[assign_row].elements[assign_col]=value;
        if(!value){break;}
        var index_coord = positions.indexOf(coord);
        positions.splice(index_coord,1);
    }
}

function checkVal(row,col){
    var len=grid[row].choice.length;
    var rand=Rand(len,0);
    var true_val=grid[row].choice[rand];
    console.log(row,col,"/n"+grid[row].choice+"/n"+grid_col[col].choice);
    grid_col[col].choice.splice(rand,1)
    grid[row].choice.splice(rand,1);
    return true_val;
}

function blanks(){
    for(i=0;i<baseNum;i++){
        for(j=0;j<baseNum;j++){
            if(!grid[i].elements[j]){
                grid[i].elements[j]="_";
            }
        }
    }
}

function play(){
    initiateGrid();
    assign();
    blanks();
    for(i=0;i<baseNum;i++){
        for(j=0;j<baseNum;j++){
            grid_col[j].elements.push(grid[i].elements[j]);
        }
        console.log("  |"+grid[i].elements+"|");
    }
    console.log("\n");
    for(var i in grid_col){console.log("  |"+grid_col[i].elements+"|");}

}

play();