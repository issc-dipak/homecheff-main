CREATE CODE = DIPAK PATIL 
  

   ***** Get Pending *****


## Get Pending Recipes (GET)

### Endpoint
```
GET /recipes/pending
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
          "recipe_id": 1,
          "title": "String",
          "description": "String",
          "created_at": "String"
      },
      {
          "recipe_id": 2,
          "title": "String",
          "description": "String",
          "created_at": "String"
      }
  ]
  ```

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---