PRACTICE CHALLENGE

My first boilerplate (from Fullstack) was not working properly, so I used one I had made without any connected database. Because of this, I had to troubleshoot a bit attaching a database.

I created database with associations and a small seed file that works when running 'node seed'

I created a react component with a form to submit a new tool

I created an API route to post a new tool, which updates the database



TO RUN THE APP
```
npm install
```
create DB 'silvershare'
```
npm run start-dev
```

server should be running on localhost:3000




INTIAL NOTES
MVP Sharing utensils

MODELS:
Users
	id
	username - string
	region (NYC, San Francisco) - string
	location (neighborhood) - zip code - number
	email address
	have many tools as owner
	have many tools as borrower
	have many reviews
	have many messages

Tools (belong to one user)
	id
	owner - one user (user id)
	status (open or shared) - 
	description - text string
	picture hyperlink - string
	features - string

Exchange
	tool (tool id)
	date borrowed
	date returned
	borrower (user id)
	lender (user id)
	have one review

Reviews
	belongs to one exchange	
	user rating - number 1-5
	tool rating - number 1-5
	description - string
	author - user id

Messages
	user - userid
	contents - text string
	type: request, response
	parent - id or null







User experience

User can - join or log in

Login
	- connect through google/facebook
	- OAuth

Join
	- oath link through google/facebook

Callback site
	- username
	- region
	- zip code

Home Page
 	-Add Items to lend
		-form
			description - text string
			picture hyperlink - string
			features - string
	-Request Items
		-form
			contents of what you want

Market Page
	- list of items available in region
		- filters (search)
		-request use
	- requested items
		- thread of messages
		-response button
			-form
				-offer a response


Important Feature for concept:
	Posting an item
		Tests:
			HTTP: submit a form to API that was getting necessary information
			DB updates after getting information
			Front End - working form - correct information for sending post request
	Viewing available items
		Tests:
			DB: get All items from DB - return all items
			API: get route that served correct information
			Front End: call was made when the component mounted, all items were received and displayed
				- function that was called during component mounting
				- views: displaying the correct info	
				- fake information
			End to end
				- mock database, http request fired from the front end
				
	Requesting use
			test
				Frontend: button that called function, sent correct form data
					form had all the necessary fields
					sent a post request
				API: post request 
					made a call to update db
					updating the exchange model
				DB: create a new exchange
					-assigns a lender
					-assigns a borrower
					- tool
					- date of exchange
					- planned date of return
			

Stretch
	Leaving a review
	Posting a request/response
