# basic-fetch-practice

## Requirements - copied from instructions 

Must be responsive	
- Use a layout system and media queries to ensure that the page looks responsive across many devices and screen sizes.
- Dynamically create, add, and remove HTML elements.	
- Every "User Card" will be created and removed via your JavaScript.

Fetch and use the returned data.
- You will use the data fetched to to populate your dynamically created "User Cards."

Create two buttons to get and handle data.	
- You will create buttons that perform actions. 
- The first fetches all the data and creates the "User Cards." 
- The second fetches all the data, but filters out any User who has been employed at their company for 10 years or more. 
- Generate cards for the remaining users and display them.

Create a button to clear the cards
- This button will remove all the cards from page.



### JSON file 
https://github.com/dan-collins-dev/dummy-data-fetching-repo/blob/main/data/users.json 

key value pairs example 

[
    {
        "id": 1,
        "firstName": "Charmian",
        "lastName": "Robottom",
        "email": "crobottom0@google.com.au",
        "companyName": "Livepath",
        "yearsEmployed": 15
    }, ... ]

#### AI USE
After encountering CORS issue in testing, reviews materials and consulted Grok 3 for possible work arounds. Created Server.js and Node Modules per instuction in an attempt to find a solution. 