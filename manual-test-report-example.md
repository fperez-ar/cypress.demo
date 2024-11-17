test report example

environment: stg
tested service versions:
- api@1.0.0
- frontend@1.0.2
- backend@1.0.1

tests ran:
1. e2e
  - registration
  - login
  - purchase 1 item
  - purchase multiple items
  - search for item
3. integration
  - retrieve user information
  - retrieve market items
  - retrieve user payment details
  - retrieve active discounts 
4. api
  - GET user auth token
  - GET market items
  - POST add to cart
  - GET valid payment
  - POST payment
  - UPDATE cart
  - GET tracking information
