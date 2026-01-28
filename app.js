 //1
 document.addEventListener("keydown",(e)=> {
      if (e.key === "Enter") {
        console.log("Enter");
      }
    });
 //2
 let inp_name=document.querySelector(".name");
 let inp_comment=document.querySelector(".comment");
 let button=document.querySelector(".button2")
 button.addEventListener("click",()=>{
    console.log("Name: "+inp_name.value,"Comment: "+inp_comment.value);
 })
 
 
 //3
 const form = document.querySelector("form");
  const passwordInput = document.querySelector(".in3");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = passwordInput.value;

    if (password.length >= 5) {
      console.log("enough");
    } else {
      console.log("more");
    }
  });