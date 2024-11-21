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

| METHOD | endpoint | validations | status | avg response | 
|-|-|-|-|-|
| GET | /user-token | schema |🟢| 287ms|
| GET | /market | schema |🟢| 201ms|
| GET | /valid-payments | schema |🟢| 102ms|
| GET | /tracking-information | schema |🟢| 120ms|
| POST | /payment | schema |🟢| 210ms|
| POST | /add-product | schema |🟢| **500ms**|
| UPDATE | /cart | schema |🟢| 98ms|

### bug reports
 - multiple items do not display properly in cart

   **journey**: purchase multiple items
   **service**: frontent@1.0.2
   **steps**:
     login
     navigate to market 
     add any 2 items to cart
     actual behaviour: only the last added item shows in cart page (/cart)
     expected behaviour: all added items show in cart page (/cart)
   **comments:** api endpoint returns all items  
