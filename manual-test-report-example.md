### test report example
date: 11-21-2024
environment: stg

tested service versions:
- _api_@1.0.0
- _frontend_@1.0.2
- _backend_@1.0.1

### tests ran:

#### **E2E**
summary:
- total cases: 5
- pass: 4 (80%)
- failed: 1 (20%)

| journey | result | 
|-|-| 
|registration|🟢|
|login|🟢|
|purchase 1 item|🟢|
|purchase multiple items|🔴|
|search for item|🟢|

#### Integration
summary:
- total cases: 5
- pass: 4 (80%)
- failed: 1 (20%)

| test | result|
|-|-|
|retrieve user information|🟢|
|retrieve market items|🟢|
|retrieve cart items|🟢|
|retrieve user payment details|🟢|
|retrieve active discounts|🔴| 

#### API
summary:
- **error rate:** 0.03%

| METHOD | endpoint | validations | status | avg response | median response |
|-|-|-|-|-|
| GET | /user-token | schema |🟢| 287ms|230ms|
| GET | /market | schema |🟢| 201ms|170ms|
| GET | /valid-payments | schema |🟢| 102ms|100ms|
| GET | /tracking-information | schema |🟢| 120ms|90ms|
| POST | /payment | schema |🟢| 210ms|170ms|
| POST | /add-product | schema |🟢| **500ms**|287ms|
| UPDATE | /cart | schema |🟢| 98ms|104ms|

### bug reports
 - multiple items do not display properly in cart

   **journey**: purchase multiple items
   
   **service**: frontent@1.0.2
   
   **steps**:
     * login with valid credentials
     * from homepage navigate to market page
     * add any 2 items to cart
     * __actual behaviour__: only the last added item shows in cart page (/cart)
     * __expected behaviour__: all added items show in cart page (/cart)
   
   **comments:** api endpoint returns all items
  
- retrieving active discounts returns object malformed object
  **service**: backend@1.0.1
  
