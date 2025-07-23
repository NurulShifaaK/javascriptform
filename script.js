const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const progressline = document.querySelector(".progressline");
const content1=document.querySelector(".content1");
const content2=document.querySelector(".content2");
const content3=document.querySelector(".content3");
const btn3=document.querySelector(".btn3");
const submitbtn=document.querySelector(".submitbtn");
const prebtn2=document.querySelector(".prebtn2");
const tablebtn=document.querySelector(".tablebtn");
const content4=document.querySelector(".content4");
const container1=document.querySelector(".container1");
const form=document.getElementById("userForm");
const tableBody = document.getElementById("userTable").querySelector("tbody");
const data=document.querySelector(".data");
const editbtn=document.getElementById("editbtn");
const regbtn=document.getElementById("regbtn");








btn.addEventListener("click", function () {
 progressline.style.width = "50%";
 content1.style.display="none";
  content2.style.display="block";
});
btn2.addEventListener("click",function(){
     progressline.style.width = "0%";
      content1.style.display="block";
  content2.style.display="none";
})
btn3.addEventListener("click",function(){
     progressline.style.width = "100%";
      content2.style.display="none";
      content3.style.display="grid";
})
prebtn2.addEventListener("click",function(){
    progressline.style.width = "50%";
     content3.style.display="none";
     content2.style.display="block";
})
submitbtn.addEventListener("click",function(){
    content4.style.display="grid";
    container1.style.display="none";
})
tablebtn.addEventListener("click",function(){
       data.style.display="grid";
      container1.style.display="none";
})

editbtn.addEventListener("click",function(){
     data.style.display="none";
     container1.style.display="grid";
     content3.style.display="grid";
})

regbtn.addEventListener("click",function(){
  data.style.display="none";
   content4.style.display="grid";
})



//table
document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("tbody"); 
const finalbtn=document.getElementById("finalbtn");


finalbtn.addEventListener("click",function(event){
event.preventDefault()
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const number=document.getElementById("number").value;
const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
const dob=document.getElementById("dob").value;
const course=document.getElementById("course").value;
const year=document.getElementById("year").value;
const address=document.getElementById("address").value;



let user={
     name,
     email,
     number,
     gender,
     dob,
     course,
     year,
     address
}

const row=tableBody.insertRow()

 row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.number}</td>
                <td>${user.gender}</td>
                <td>${user.dob}</td>
                <td>${user.course}</td>
                <td>${user.year}</td>
                <td>${user.address}</td>
                <td>
                    
                </td>
            `

const delbtn = document.createElement("button");
delbtn.innerText = "Delete";
const lastCell = row.insertCell(-1); // Inserts at the end
lastCell.appendChild(delbtn);
row.querySelector("td:last-child").appendChild(delbtn);

delbtn.addEventListener("click",function(){
     row.remove()
})
delbtn.classList.add("delete-btn");

})
});
