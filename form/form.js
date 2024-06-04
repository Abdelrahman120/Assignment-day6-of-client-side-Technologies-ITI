function validate(){
    var names=[];
    var regexofName=/^[a-zA-Z]+$/;
    var name=document.getElementsByTagName("input")[0];
    var span1=document.getElementById("1");
    if(name.value==""){
        span1.textContent="this field is required";
    }
    else if(regexofName.test(name.value)===false){
        span1.textContent="plese enter character";
        name.value=""
    }else{
        names.push(name.value);
        span1.textContent="";
    }

    var ages=[];
    var age=document.getElementsByTagName("input")[1];
    var span2=document.getElementById("2");
    if(age.value==""){
        span2.textContent="this field is required";
    }else if(isNaN(age.value)){
        span2.textContent="plese enter numbers";
        age.value=""
    }else{
        ages.push(age.value);
        span2.textContent="";
    }

    var emails =[];
    var regexofEm=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.getElementsByTagName("input")[2];
    var span3=document.getElementById("3");
    if(email.value==""){
        span3.textContent="this field is required";
    }else if(regexofEm.test(email.value)===false){
        span3.textContent="plese enter valid email";
        email.value=""
    }else{
        emails.push(email.value);
        span3.textContent="";
    }

    if(email.value!="" && name.value!="" && email.value!=""){
        document.getElementsByTagName("table")[0].style.display="table";

        for(var i=0;i<names.length;i++){
            var tbody = document.getElementById('tbody');
            var newRow = document.createElement('tr');
            var cell1 = document.createElement('td');
            cell1.textContent = names[i];
            newRow.appendChild(cell1);
            tbody.appendChild(newRow);
        }

        for(var i=0;i<ages.length;i++){
            var tr =document.getElementById("tbody").lastChild;
            var cell2 = document.createElement('td');
            cell2.textContent = ages[i];
            tr.appendChild(cell2);
            var cell3 = document.createElement('td');
            cell3.textContent = emails[i]
            tr.appendChild(cell3);
        }
        
        reset();
        names.pop();
        ages.pop();
        emails.pop();
    }
}

function reset() {
    var one =document.getElementsByTagName("input")[0];
    one.value="";
    var two=document.getElementsByTagName("input")[1];
    two.value="";
    var three=document.getElementsByTagName("input")[2];
    three.value="";
}