## Create User (POST)

### Endpoint
```
POST /users
```

### Request Headers
```
Content-Type: application/json
```

### Request Body
```json
{
    "full_name": "String",
    "username": "String",
    "email": "String",
    "phone_number": "String",
    "password": "String"
}
```

### Response

- **201 - Created**

  **Body:**
  ```json
  {
      "message": "User created successfully"
  }
  ```

- **400 - Bad Request**
  - Example: Missing required fields or duplicate username/email.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---
