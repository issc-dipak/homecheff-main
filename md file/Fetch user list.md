CREATE CODE = DIPAK PATIL 
  

   *****Login*****


## Fetch User List (GET)

### Endpoint
```
GET /users
```

### Request Headers
```
Content-Type: application/json
```

### Response

- **200 - Success**

  **Body:**
  ```json
  [
      {
          "id": 1,
          "full_name": "String",
          "username": "String",
          "email": "String",
          "phone_number": "String"
      },
      {
          "id": 2,
          "full_name": "String",
          "username": "String",
          "email": "String",
          "phone_number": "String"
      }
  ]
  ```

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---

## User Login Endpoint

### Endpoint
```
POST /login
```

### Request Headers
```
Content-Type: application/json
```

### Request Body
```json
{
    "Email": "String",
    "Password": "String"
}
```

### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "Login successful"
  }
  ```

- **400 - Bad Request**
  - Example: Missing email or invalid credentials.

- **500 - Internal Server Error**
  - Example: Server error during database operation.
