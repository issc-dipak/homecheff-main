const BASE_URL = 'http://localhost:3000'; // Backend URL

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from reloading page

  const full_name = document.getElementById('full_name').value;
  const username = document.getElementById('username_signup').value;
  const email = document.getElementById('email').value;
  const phone_number = document.getElementById('phone_number').value;
  const password = document.getElementById('password_signup').value;

  const signupData = { full_name, username, email, phone_number, password };

  try {
    // Sending data to the backend signup API
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    const result = await response.json();
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = result.message;
    messageDiv.style.color = response.ok ? 'green' : 'red';
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('message').textContent = 'Error connecting to server';
  }
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from reloading page

  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;

  const loginData = { Email: email, Password: password };

  try {
    // Sending data to the backend login API
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    const loginMessageDiv = document.getElementById('loginMessage');
    
    if (response.ok) {
      loginMessageDiv.textContent = 'Login successful';
      loginMessageDiv.style.color = 'green';
    } else {
      loginMessageDiv.textContent = result.message;
      loginMessageDiv.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('loginMessage').textContent = 'Error connecting to server';
  }
});
