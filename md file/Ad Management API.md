CREATE CODE = DIPAK PATIL 
  

   *****Ad Management API*****




## Ad Management APIs

### Create Ad (POST)

#### Endpoint
```
POST /ads
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
    "title": "String",
    "description": "String",
    "created_by": "String"
}
```

#### Response

- **201 - Created**

  **Body:**
  ```json
  {
      "message": "Ad created successfully"
  }
  ```

- **400 - Bad Request**
  - Example: Missing required fields.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---

### Update Ad (PUT or PATCH)

#### Endpoint
```
PUT /ads/:id
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
    "title": "String",
    "description": "String"
}
```

#### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "Ad updated successfully"
  }
  ```

- **400 - Bad Request**
  - Example: No fields provided for update.

- **404 - Not Found**
  - Example: Ad with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---

### Delete Ad (DELETE)

#### Endpoint
```
DELETE /ads/:id
```

#### Request Headers
```
Content-Type: application/json
```

#### Response

- **200 - Success**

  **Body:**
  ```json
  {
      "message": "Ad deleted successfully"
  }
  ```

- **404 - Not Found**
  - Example: Ad with the provided ID does not exist.

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---