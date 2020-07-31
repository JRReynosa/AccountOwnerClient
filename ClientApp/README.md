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

Dynamic Form Creation and Modal Components (7/30/2020)
=========
This was mostly creating the form/view. I like the use of how I can create a singular modal that can later be populated with any data I want. I was a little confused by the process
of array of objects to form objects but it makes a little sense. I also had to add ".toDate()" to the datePicker for it to work. Neat stuff.

The following was the content for this part of the series:
* Success and Error Modal Window Components
* Creating Input Configuration
* Creating Input Elements Dynamically
* CreateOwner Component
* Finalizing the CreateOwner View

Form Validation and Sending the POST Requests (7/31/2020)
=========
Simple part of the series, redux is easier to understand now, as well as implementing it. Actually doing the form validation rather than using 
ASP.NET model validators is very different. However, I do feel like I have much more control over what's going on in my app.

The following was the content for this part of the series:

* Handling OnChange Event with the handleChangeEvent Function
* Creating Additional Functions for React Form Validation
* Entire Reactive Form Validation
* Connect the CreateOwner Component With the Reducer
* Modifying the Action and the Reducer files

React PUT Requests (7/31/2020)
=========
A lot of this series is old. The lifecycle hooks used are deprecated, and I tried looking into the React docs for the best way to update the code
but it got a little hard for me to wrap my head around. This part of the series was easy and neat considering we simply used components from the 
last part and implemented redux the same way again.

The following was the content for this part of the series:

* Preparation for the Update Owner Component and the Routing Settings
* Adding Input Elements, Validation, and Two-Way Binding
* Connecting the Reducer With the Component
* Fetching Data From The Server
* Displaying Data on the Screen
* Executing the Update Action

React DELETE Requests (7/31/2020)
=========
Neat series. I'm bugged by the fact that it was old though. Feel like it was good enough for a basic understanding but I have a ways to go.

The following was the content for this part of the series:

* Preparations for the Delete Owner Component and the Delete Route
* Connecting Our Component with the Reducer
* Implementing JSX in the DeleteOwner Component
* Implementing the Business Logic for the Delete Action