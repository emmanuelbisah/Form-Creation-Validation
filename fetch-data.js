// Step 1: Define the async function
async function fetchUserData() {
    // Step 2: API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data
        const response = await fetch(apiUrl);

        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();

        // Step 5: Clear loading message
        dataContainer.innerHTML = '';

        // Step 6: Create and append list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Step 8: Run function on DOM load
document.addEventListener('DOMContentLoaded', fetchUserData);
