CREATE CODE = DIPAK PATIL 
  

   *****Approve Recipe*****




## Approve Recipe (POST/PUT)

### Endpoint
```
POST /recipes/:id/approve
```

### Request Headers
```
Content-Type: application/json
```

### Request Body
```json
{
    "approved_by": "String"
}
```

### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "Recipe approved successfully"
  }
  ```

- **404 - Not Found**
  - Example: Recipe with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---
