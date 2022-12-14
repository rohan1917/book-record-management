# book-record-management

This is an application called book record managemnet/API 

## Endpoints

## /users (done)
POST: Create a new user
GET: Get all list of users

## /users/{id} (done)
GET: Get a user by thier ID
PUT: Update a user by ID
DELETE: Delete a user by thier ID (Check if the user still has an issued book && is there any fine to be collected from the user)

<!-- complex -->
## /users/subscription-details/{id}
GET: Get user subscription details
1. Date of Subscription
2. Valid till ??
3. Fine if any ??

## /books
GET: Get all books
POST: Add a new book

## /books/{id}
GET: Get a book by id
PUT: Update a book by Id

## /books/issued
GET: Get all issued books here

<!-- Its assignment -->
## /books/issued/withFine
GET: Get all issued books with fine

## Subscription Typs
Basic (3 months)
Standard (6  months)
Premium (12 months)


If user has an issued book and the issued book is to be returned at 09-12-22
If user missed the date to return, then user gets a fine of Rs. 50/-

If user has an issued book and the issued book is to be returned at 09-12-22
If user missed the date to return, and the users subscription also got expired, then user need to pay a fine of 150/- (100+50)




<!-- 
MVC Arch
    >> Model View Controller
    >> Model & Controller r wrt b/c end
    >> view wrt to f/e end
    >> Controller : Brain or logic of ur route
 -->

 <!-- model: It speaks abt the structure of MongoDB Collection -->