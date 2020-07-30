Preparing the Project and Creating Components (7/27/2020)
=========
Before beginning I made use of Mircosoft's documentation at https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio
to set up the CRA server to run seperately from the ASP.NET Core app. Doing so allows enables my ASP.NET Core app to start and restart faster, and the front-end no longer
has to rebuild with app each time.

The following was the content for this part of the series:

* Creating a New Project
* Third-Party Libraries
* React Components Overview
* Creating Our Components
* Home Component

I had to delete some files because I used VS's React template and it came with additional files. As the list aboce shows, this part was basic React and getting our feet wet.


Navigation and Routing (7/27/2020)
=========
Once again, some files were present and some weren't. Also, being stubborn I chose to use the latest BootStrap version, and so some of the BootStrap components and CSS had to be 
tweaked.

The following was the content for this part of the series:

* React Routing Configuration, BrowserRouter, and Route
* Navigation Menu
* Creating the Not-Found Component

HTTP, Axios, and Redux (7/28/2020)
=========
The introduction to redux was alright, a little hard to wrap my head around what's going on at a fundamental level.

The following was the content for this part of the series:

* Creating the Axios Instance
* About Redux in React App
* Redux – Action Types
* Redux – Repository Actions (Action Container)
* React – Reducer
* Reducer File Registration

React Lazy Loading and HOC Component (7/29/2020)
=========
Understood redux a little more after this, "implementing redux" was essentially like binding a model to view. I had to change some of the server code to set up the 
Owner API, I created the model and DBContext & set up the local SQL database. The DB is empty though, so I cannot quite test that the API is working as expected,
but I'll test it when we get to the POST requests part of the series. I also changed the axios baseUrl port to 44317.

The following was the content for this part of the series:

* OwnerList Component Creation, HOC, and Routes
* Implementing Redux
* Creating the Owner Component
* Displaying Owners Result
* Lazy Content Loading

Error Handling and Additional Components (7/30/2020)
=========
So first off, I had to change the axios base url to my local host port because it wasn't fetching the data properly. Afterwards, I added two people, as well as 5 accounts to test
the data and it worked. I also created a the OwnerViewModel for the OwnerDetails container. Supposedly, Redux implementation shoudl be easy for me now, but the whole flow of it
sometimes gets me confused. Setting up the error component did help my understanding a lot however.

The following was the content for this part of the series:

* Creating the 500 (Internal Server Error) Component
* Implementing Redux for Error Handling
* Combine Reducers Registration
* OwnerList Component Modification
* Implementation of the OwnerDetails Component

Dynamic Form Creation and Modal Components
=========

Form Validation and Sending the POST Requests
=========

React PUT Requests
=========

React DELETE Requests
=========

Series Conclusion
=========
