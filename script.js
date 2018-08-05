var counter=1;
var arr=[];
for(var i=0;i<9;i++)
    {
        arr[i]= i+99;
    }
function fun(id)
{
    if(counter%2!=0)
        {
          var a  = document.getElementById(id);
            console.log(a.id);
            a.value = "X";
            $("#"+id).attr("disabled","disabled");
            let val = parseInt(a.id);
            let index = (val-1);
            arr[index] = 1;
             console.log("arr["+index+"]="+arr[index]);
            counter++;
        }else{
            var a  = document.getElementById(id);
            console.log(a.innerHTML);
            a.value = "O";
             let val = parseInt(a.id);
            let index = (val-1);
            arr[index] = 0;
            console.log("arr["+index+"]="+arr[index]);
             $("#"+id).attr("disabled","disabled");
            counter++;
        }
    console.log("enter into ththe while loo[p]");
    if((arr[0]==arr[1])&&(arr[1]==arr[2])){
        console.log("accepted");
        change(1,2,3,arr[0]);
    }else
        if((arr[0]==arr[3])&&(arr[3]==arr[6])){
            console.log("accepted1");
            change(1,4,7,arr[0]);
        } else if((arr[0]==arr[4])&&(arr[4]==arr[8])){
        console.log("accpeted2");
            change(1,5,9,arr[0]);
        }else if((arr[1]==arr[4])&&(arr[4]==arr[7])){
            console.log("accept3");
            change(2,5,8,arr[1]);
        }else if((arr[2]==arr[4])&&(arr[4]==arr[6])) {
            console.log("accept4");
            change(3,5,7,arr[2]);
        }else if(arr[2]==arr[5] && arr[5]==arr[8]){
            console.log("accpet5");
            change(3,6,9,arr[2]);
        }else if(arr[3]==arr[4]&&arr[4]==arr[5]){
            change(4,5,6,arr[3]);
        }else if(arr[6]==arr[7]&&arr[7]==arr[8]){
            change(7,8,9,arr[6]);
        }
        }


function change(a,b,c,d)
{

    $(":button").attr("disabled","disabled");
    $("#"+a).removeAttr("disabled");
    $("#"+a).css("color","red");
    $("#"+b).removeAttr("disabled");
    $("#"+b).css("color","red");
    $("#"+c).removeAttr("disabled");
    $("#"+c).css("color","red");
   $(":button").attr("disabled","disabled");
    if(d==1)
$("#winner").html("The winner is X");
    else
        $("#winner").html("the winner is O");

}


