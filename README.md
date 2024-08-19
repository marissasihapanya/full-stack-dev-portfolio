# README
## Architecture
<p></p>
<b>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?</b>
<p></p>
The front-facing customer website was built in Express HTML while the administrator page was built in Angular. Through the frontend and backend code, JavaScript was used. Express handled server-side logic and API routing for the website, while also interacting with the backend MongoDB database. HTML was used as a markup language, along with CSS, to build the frontend of the Travlr Getaways website. The Angular admin application also used HTML and CSS for its frontend. The Angular side also handled client-side logic for the application.
A NoSQL MongoDB database was used to leverage its nonrelational nature and accurately capture the data stored in the application. Trip data required strings of varying lengths. Also, the nature of our data was best communicated across the application in JSON format, and MongoDB utilizes BSON, which perfectly matches, stores, and processes JSON data. MongoDB is also strongly capable with document-based queries, which can allow Travlrs to implement custom queries for users and trips. This would allow Travlrs to implement common travelling website functionalities smoothly, like user-specific recommendations and criteria-based trip filtering. 

## Functionality
<p></p>
<b>How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?<p></p>
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</b>
<p></p>
JSON stands for JavaScript Object Notation, and it's a standard for how data is formatted. JavaScript is a programming language. JSON ties together the frontend and backend by holding the data within its JSON objects. This allows for data to travel across API endpoints, stored in the backend, and then finally presented to the user in the frontend through Angular/Express code. The Express customer-facing website code was refactored several times. One example is during the implementation of the Handlebars engine. Headers and footers were reduced down to a single phrase within brackets (e.g. {{ > header }}) through Handlebars templates. This also allowed the website to display more dynamically, and offered the functionality of reusable user interface components without the clutter of redundant code and a heavy, disorganized file structure.
<p></p>

## Testing
<b>Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.</b>
<p></p>
Methods are custom defined functions that send data to API endpoints through requests, and also retrieve data from API endpoints through response processing. Endpoints are like listeners which are defined by the coder that are programmed to retrieve data from other sources, like the MongoDB database. The code within an endpoint parses request data sent by a method, accesses another endpoint or a database, then returns the retrieved data via a response. Methods are then used again to retrieve the data that the endpoint is sending out. Endpoints are also defined by URL add-ons. For example, the /trips endpoint returns all trips in the database. You can think of waiters and waitresses in a restaurant. Waiters and waitresses are engines that implement methods, and the orders from the diners (different parts of the application) are requests that they send to the endpoints (the kitchen). The kitchen makes the order (retrieves data from a source like a database) then sends the waiter back with the food (the response). The waiter walks back to the diners with the food (the response data), and the act of them walking back to the diners is the method being implemented. With the additional layer of security, Travlrs needed to ensure that only logged in and authorized users could be adding trips, editing trips, thus sending and retrieving requests to the endpoints. In our restaurant metaphor, the login security feature is like the manager of the restaurant, who ensures that waiters show up in uniform and they are the only ones sending food orders to the kitchen and bringing orders to the dining tables.
<p></p>

## Reflection
<p></p>
<b>How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?</b>
<p></p>
This course has strengthened my grip on the complete process of full-stack development for a web application. I've learned code refactoring, application file structuring, and more advanced JavaScript for clean data travel across an entire application. The frontend and the backend of an application and how they work together are now more clear to me. It is really nice to see how all the pieces work together, and continuously re-running the code to see and test updates to the application really drove in the whole process for me. I am more confident in my ability to build a full-stack web application, and will be building some of my own for my portfolio, making me a more marketable candidate in the software engineering field.
