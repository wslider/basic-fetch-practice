const allUsersButton = document.getElementById("allUsersButton");
const usersUnder10Button = document.getElementById("usersUnder10Button");
const resetButton = document.getElementById("resetButton");
const cardsContainer = document.getElementById("cardsContainer");

// Fetch function
async function fetchUserData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error; 
  }
}

// Display user cards function
async function displayUserCards(users) {
  cardsContainer.innerHTML = ''; 
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'userCard';
    card.innerHTML = `
      <p>First Name: ${user.firstName} </p>
      <p>Last Name: ${user.lastName} </p>
      <p>Email: ${user.email} </p>
      <p>Company Name: ${user.companyName} </p>
      <p>Years Employed: ${user.yearsEmployed} </p>
    `;
    cardsContainer.appendChild(card);
  });
}

// Fetch and display all users
allUsersButton.addEventListener("click", async () => {
  try {
    const users = await fetchUserData('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/refs/heads/main/data/users.json');
    await displayUserCards(users);
  } catch (error) {
    cardsContainer.innerHTML = `<p>An error occurred. We could not find the users you were looking for.</p>`;
  }
});

usersUnder10Button.addEventListener("click", async () => {
  try {
    const users = await fetchUserData('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/refs/heads/main/data/users.json');
    const filteredUsers = users.filter(user => user.yearsEmployed < 10);
    await displayUserCards(filteredUsers);
  } catch (error) {
    cardsContainer.innerHTML = `<p>An error occurred. We could not find the users you were looking for.</p>`;
  }
});

resetButton.addEventListener("click", ()=> {
    cardsContainer.innerHTML = ""; 
})




/*const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const companyName = document.getElementById("companyName");
const yearsEmployed = document.getElementById("yearsEmployed");*/