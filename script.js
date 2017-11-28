$(document).ready(function(){
    $('#btn').on('click', function(){
        var str = adress.value;
        var temp = "";
        if (str.substring(0,12) == 'https://www.'){
            var str_new = str.substring(12);
            str_new = str.substring(12, str.length - 3)
            temp = correct(str_new);
        }
        else if(str.substring(0,11) == 'http://www.'){
            var str_new = str.substring(11);
            str_new = str.substring(11, str.length - 3)
            temp = correct(str_new);
        }
        else if (str.substring(0,8) == 'https://'){ 
            var str_new = str.substring(8);
            str_new = str.substring(8, str.length - 3)
            temp = correct(str_new);
        }
        else if(str.substring(0,7) == 'http://'){
            var str_new = str.substring(7);
            str_new = str.substring(7, str.length - 3)
            temp = correct(str_new);
        }
        else{
            var str_new = str;
        }
    
        out2.innerHTML = str_new + temp;
    })
    
    function correct(str_new){
        str_new = str_new.replace( /o/g, "0" ) 
        str_new = str_new.replace( /O/g, "0" ) 
        str_new = str_new.replace( /l/g, "1" ) 
        str_new = str_new.replace( /i/g, "3" ) 
        str_new = str_new.replace( /s/g, "5" )
        var temp = "";
        for (let i = 0; i < 4; i++)  {
            var zn = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            var num = Math.floor(Math.random() * ( 57 - 48 + 1 ) + 48);
            var ab = Math.floor(Math.random() * ( 122 - 97 + 1 )) + 97;
            console.log(zn, num, ab)
            var k = zn ? num : ab;
            var ch = String.fromCharCode(k);
            temp += ch;
            console.log(ch)
        }
        return temp;
    }
})