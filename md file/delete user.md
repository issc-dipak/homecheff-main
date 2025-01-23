CREATE CODE = DIPAK PATIL 
  

   *****Delete User*****




## Delete User (DELETE)

### Endpoint
```
DELETE /users/:id
```

### Request Headers
```
Content-Type: application/json
```

### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "User deleted successfully"
  }
  ```

- **404 - Not Found**
  - Example: User with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---
