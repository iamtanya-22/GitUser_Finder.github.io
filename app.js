//Initiate github
const github=new Github;

//Initiate ui
const ui=new UI;

//search user
const searchUser=document.getElementById('searchUser');
//search user event listenter
searchUser.addEventListener('keyup',(e) => {
  const userText=e.target.value;
  if(userText!==''){
    //make HTTP call
    github.getUser(userText)
    .then(data => {
       if(data.profile.message==='Not Found'){
          //Show Alert
       }
       else{
        //Show Profile
         ui.showProfile(data.profile);
       }
    })
  }
  else{
      //Clear Profile

  }
})