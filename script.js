const allUsersButton = document.getElementById("allUsersButton");
const usersUnder10Button = document.getElementById("usersUnder10Button");
const resetButton = document.getElementById("resetButton");


const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const companyName = document.getElementById("companyName");
const yearsEmployed = document.getElementById("yearsEmployed");


// intitial fetch function

async function fetchUserData( url ) {
  try {
     const response = await fetch(url);  
     if(!response.ok){
         throw new Error (`error status ${response.status}`); 
     }
     const data = await response.json(); 
     return data;
  }
    catch {
        console.error('Error:', error.message); 
    } 
}

async function getUserData () {
    try {
        const data = await fetchUserData('https://github.com/dan-collins-dev/dummy-data-fetching-repo/blob/main/data/users.json');
        console.log('Data: ', data); 
    }
    catch {
        console.error('Error:', error.message); 
    }
}

getUserData();

// function to create and display user cards .. use cardContainer.appendChild(card)
// function to delete user cards 

// event listener for each button 