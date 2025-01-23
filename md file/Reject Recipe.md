CREATE CODE = DIPAK PATIL 
  

   *****Reject Recipe *****



## Reject Recipe (POST/DELETE)

### Endpoint
```
POST /recipes/:id/reject
```

### Request Headers
```
Content-Type: application/json
```

### Request Body
```json
{
    "rejected_by": "String",
    "reason": "String"
}
```

### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "Recipe rejected successfully"
  }
  ```

- **404 - Not Found**
  - Example: Recipe with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---

## User Login Endpoint

### Endpoint
```