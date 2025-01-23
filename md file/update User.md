CREATE CODE = DIPAK PATIL 
  

   *****Update User*****





## Update User (PUT or PATCH)

### Endpoint
```
PUT /users/:id
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
    "phone_number": "String"
}
```

### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "User updated successfully"
  }
  ```

- **400 - Bad Request**
  - Example: No fields provided for update.

- **404 - Not Found**
  - Example: User with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---