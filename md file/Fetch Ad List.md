CREATE CODE = DIPAK PATIL 
  

   *****Fetch Ad List*****



### Fetch Ad List (GET)

#### Endpoint
```
GET /ads
```

#### Request Headers
```
Content-Type: application/json
```

#### Response

- **200 - Success**

  **Body:**
  ```json
  [
      {
          "id": 1,
          "title": "String",
          "description": "String",
          "created_by": "String"
      },
      {
          "id": 2,
          "title": "String",
          "description": "String",
          "created_by": "String"
      }
  ]
  ```

- **500 - Internal Server Error**
  - Example: Server error during database operation.

---

### Fetch Ad Client Requests (GET)

#### Endpoint
```
GET /ads/client-requests
```

#### Request Headers
```
Content-Type: application/json
```

#### Response

- **200 - Success**

  **Body:**
  ```json
  [
      {
          "request_id": 1,
          "client_name": "String",
          "ad_title": "String",
          "request_date": "String"
      },
      {
          "request_id": 2,
          "client_name": "String",
          "ad_title": "String",
          "request_date": "String"
      }
  ]
  ```

- **500 - Internal Server Error**
  - Example: Server error during database operation.
