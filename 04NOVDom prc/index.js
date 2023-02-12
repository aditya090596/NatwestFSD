function calculate() {
    var n1 = document.getElementById("textfield1").value;
    var n2 = document.getElementById("textfield2").value;
    var result = 0;
    var choice = document.getElementById("calchoice").value;

    if(choice === '1') 
    {
        result = parseInt(n1) + parseInt(n2);
        
    }
    else if(choice ==='2') 
    {
        result=parseInt(n1) - parseInt(n2);
    }
        else if(choice ==='3')
        {
            result=parseInt(n1) *  parseInt(n2);
        }
        else if(choice ==='4'){
            result =parseInt(n1)/parseInt(n2);
            console.log(result);
        }
        else {
            console.log("Invalid");
        }
    

    //For creating para
    var mypara=document.createElement('h1');
    //created text node and added esult value in it
    var paratext=document.createTextNode(result);
    mypara.appendChild(paratext);
    var mybodytag=document.getElementsByTagName('body');
    mybodytag[0].appendChild(mypara);
    console.log("Final result",result);
    }

