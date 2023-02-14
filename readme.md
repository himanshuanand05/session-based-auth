# Backend Task 
This document contains a task for backend engineer position. Please think about all your  decisions while solving it. Provide essential solution without extra unused files which may come  with basic templates of the framework. Keep code clean without extra files and bad comments.  If you can’t provide clean solution no further code review will be taken. 
Candidate is asked to write small backend JSON API service which will be used by mobile and  web clients. It should be written using Express or NestJS framework with session based  authentication (with session token), migrations and automated functional testing. 
Idea of the service is simple - register and authenticate user, deliver data to the frontend. Database 
Candidate is asked to use Postgres database. Schema must be elicited by developer to fit  JSON API interface. ORM may be used in the code. Please use foreign keys. Separate User,  Token, Author and Quote entities. 
It will be appreciated if EER schema will be prepared. 
## Versioning 
Candidate must prepare his codes under GIT repository. Several releases must be separated  and simple branch release management must be applied. GitFlow classical approach will be  appreciated. 

## Testing 
Mocha framework must be used for testing. Candidate should cover all API methods with  functional tests. 

## JSON API 
All responses must have a standard simple message format with application/json content type: 
{ 
 "success": true, 
 "data": {} 
} 

1. GET /info - no authentication needed 
Returns public information for the main page.  
Response: 
{ 
 "success": true, 
 "data": { 
 "info": "Some information about the <b>company</b>."  } 
} 

2. POST /register - only not authenticated 
Registers user in the service. Request information is encoded in JSON object in the body. Request: 
{ 
 "email": "alexey@klaim.ai", 
 "password": "lkJlkn8hj", 
 "fullname": "Alexey Kornilov" 
} 
Response: 
{ 
 "success": true, 
 "data": {} 
} 
 
3. POST /login - only not authenticated 
Authenticates user using provided email/password pair. Request information is encoded in  JSON object in the body. Token received must be used for other requests authentication. 
Request: 
{ 
 "email": "alexey@klaim.ai", 
 "password": "lkJlkn8hj" 
} 
Response: 
{ 
 "success": true, 
 "data": { 
 "token": "fb566635a66295da0c8ad3f467c32dcf" 
 } 
} 

4. GET /profile?token=[token] - only authenticated 
Returns simple user information for current authenticated user. Token is used for authentication. Response: 
{ 
 "success": true, 
 "data": { 
 "fullname": "Alexey Kornilov", 
 "email": "alexey@klaim.ai" 
 } 
} 

5. GET /author?token=[token] - only authenticated 
After 5 seconds delay returns random author information. Token is used for authentication. Response: 
{ 
 "success": true, 
 "data": { 
 "authorId": 1, 
 "name": "Charlie Chaplin" 
 } 
} 

6. GET /quote?token=[token]&authorId=[authorId] - only authenticated After 5 seconds delay return random quote from the author. Token is used for authentication. Response: 
{ 
 "success": true, 
 "data": { 
 "authorId": 1, 
 "quoteId": 3, 
 "quote": "A day without laughter is a day wasted." 
 } 
} 

7. DELETE /logout?token=[token] 
Sign out the user from the service. 
Response: 
{ 
 "success": true, 
 "data": {} 
} 

## Result 
What is critical is to make everything as expected and show your competence. You will be  asked about your code as well. 

## Questions 
If you have any questions write them to email provided at the bottom left corner. Thank you! 

Appendix A: Authors Sample Data 
[ 
 { 
 "authorId": 1, 
 "name": "Walt Disney" 
 }, 
 { 
 "authorId": 2, 
 "name": "Mark Twain" 
 }, 
 { 
 "authorId": 3, 
 "name": "Albert Einstein" 
 } 
] 

Appendix B: Quotes Sample Data 
[ 
 { 
 "quoteId": 1, 
 "authorId": 1, 
 "quote": "The more you like yourself, the less you are like anyone else, which  makes you unique." 
 }, 
 { 
 "quoteId": 2, 
 "authorId": 1, 
 "quote": "Disneyland is a work of love. We didn't go into Disneyland just with  the idea of making money." 
 }, 
 { 
 "quoteId": 3, 
 "authorId": 1, 
 "quote": "I always like to look on the optimistic side of life, but I am  realistic enough to know that life is a complex matter." 
 }, 
 { 
 "quoteId": 4, 
 "authorId": 2, 
 "quote": "The secret of getting ahead is getting started."  }, 
 { 
 "quoteId": 5, 
 "authorId": 2, 
 "quote": "Part of the secret of a success in life is to eat what you like and  let the food fight it out inside." 
 }, 
 { 
 "quoteId": 6, 
 "authorId": 2, 
 "quote": "You can't depend on your eyes when your imagination is out of  focus." 
 }, 
 { 
 "quoteId": 7, 
 "authorId": 3, 
 "quote": "Look deep into nature, and then you will understand everything  better." 
 }, 
 { 
 "quoteId": 8, 
 "authorId": 3, 
 "quote": "Learn from yesterday, live for today, hope for tomorrow. The  important thing is not to stop questioning." 
 }, 
 { 
 "quoteId": 9, 
 "authorId": 3, 
 "quote": "The only source of knowledge is experience." 
 } 
] 

alexey@klaim.ai Monday, January 16, 2023
