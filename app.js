//Initiate github
const github=new Github;
//search user
const searchUser=document.getElementById('searchUser');
//search user event listenter
searchUser.addEventListener('keyup',(e) => {
  const userText=e.target.value;
  if(userText!==''){
    //make HTTP call
    github.getUser(userText)
    .then(data => {
       console.log(data);
    })
  }
})