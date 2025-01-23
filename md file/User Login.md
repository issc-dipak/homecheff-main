
CREATE CODE = DIPAK PATIL 
  

   *****Login*****


### User Login Endpoint

#### Endpoint
```
POST /login
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
   json
{
    "Email": "String",
    "Password": "String"
}


#### Response

- **200 - Success**

  **Body:**
  json
  {
      "message": "Login successful"
  }
  

- **400 - Bad Request**
  - Example: Missing email or invalid credentials

- **500 - Internal Server Error**
  - Example: Server error during database operation

---





