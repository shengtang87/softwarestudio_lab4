// Todo 3 : Write some function to handle the pass value from HTML

function clickin(c){
    var s = document.getElementById("screen");
    if(c=='.'){
        s.value += c;
    }
    else if(s.value=='0') s.value = c;
    else s.value += c;
}

function typein(event){
    var x = event.key;
    var s = document.getElementById("screen");
    if((x<=9&&x>=0)||x=='+'||x=='-'||x=='*'||x=='/'||x=='('||x==')'){
        if(s.value=='0') s.value = x;
        else s.value += x;
    }


    else if(x=='.'){
        s.value += x;
    }
    else if(event.keyCode == 8){
        var newStr = s.value.slice(0, -1);
        s.value=newStr;
    }
    else if(x=='='||event.keyCode === 13){
        try{
            document.getElementById("screen").value==eval(document.getElementById("screen").value);
        }catch{
            s.value='error';
        }
        let text = s.value;
        let result = eval(text);
        s.value=result;
    }
}

function calcu(){
    var s = document.getElementById("screen");

    try{
        document.getElementById("screen").value==eval(document.getElementById("screen").value);
    }catch{
        s.value='error';
    }

    let text = s.value;
    let result = eval(text);
    s.value=result;
}

function cle(){    
    var s = document.getElementById("screen");
    s.value=0;
}