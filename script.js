let loginbutton =
document.getElementById("login-btn");

if(loginbutton){

    loginbutton.addEventListener("click", function(){

        let useremail =
        document.getElementById("email").value;

        let userpasswordd =
        document.getElementById("password").value;

        if(useremail===""){
            alert("Enter Email");
        }

        else{
            window.location.href =
            "dashboard.html";
        }

    });

}
function showdetails(name, city, role, email){

    document.getElementById("modalName").innerText =
    "Name: " + name;

    document.getElementById("modalEmail").innerText =
    "Email: " + email;

    document.getElementById("modalRole").innerText =
    "Role: " + role;

    document.getElementById("modalCity").innerText =
    "City: " + city;

    document.getElementById("userModal").style.display =
    "block";

}

function closeModal(){

    document.getElementById("userModal").style.display =
    "none";

}
let searchBox = document.getElementById("search");
if(searchBox){



searchBox.addEventListener("keyup", function(){

    let value = searchBox.value;

    if(document.getElementById("shivangirow").innerText.includes(value)){
        document.getElementById("shivangirow").style.display = "table-row";
    }
    else{
        document.getElementById("shivangirow").style.display = "none";
    }

    if(document.getElementById("utkarshrow").innerText.includes(value)){
        document.getElementById("utkarshrow").style.display = "table-row";
    }
    else{
        document.getElementById("utkarshrow").style.display = "none";
    }

    if(document.getElementById("simranrow").innerText.includes(value)){
        document.getElementById("simranrow").style.display = "table-row";
    }
    else{
        document.getElementById("simranrow").style.display = "none";
    }

    if(document.getElementById("aarurow").innerText.includes(value)){
        document.getElementById("aarurow").style.display = "table-row";
    }
    else{
        document.getElementById("aarurow").style.display = "none";
    }

})};

if(document.getElementById("AllcityBtn")){
document.getElementById("AllcityBtn")
.addEventListener("click", function(){

    document.getElementById("shivangirow").style.display = "table-row";
    document.getElementById("utkarshrow").style.display = "table-row";
    document.getElementById("simranrow").style.display = "table-row";
    document.getElementById("aarurow").style.display = "table-row";

});




document.getElementById("delcityBtn")
.addEventListener("click", function(){

    document.getElementById("shivangirow").style.display = "table-row";

    document.getElementById("utkarshrow").style.display = "none";
    document.getElementById("simranrow").style.display = "none";
    document.getElementById("aarurow").style.display = "none";

});



document.getElementById("AgracityBtn")
.addEventListener("click", function(){

    document.getElementById("utkarshrow").style.display = "table-row";

    document.getElementById("shivangirow").style.display = "none";
    document.getElementById("simranrow").style.display = "none";
    document.getElementById("aarurow").style.display = "none";

});



document.getElementById("mumcityBtn")
.addEventListener("click", function(){

    document.getElementById("simranrow").style.display = "table-row";

    document.getElementById("shivangirow").style.display = "none";
    document.getElementById("utkarshrow").style.display = "none";
    document.getElementById("aarurow").style.display = "none";

});




document.getElementById("goacityBtn")
.addEventListener("click", function(){

    document.getElementById("aarurow").style.display = "table-row";

    document.getElementById("shivangirow").style.display = "none";
    document.getElementById("utkarshrow").style.display = "none";
    document.getElementById("simranrow").style.display = "none";

})
};