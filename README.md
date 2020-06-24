# salary-app
A simple salary calculator built with Vue and Express.js


## Installation
 - clone the repo
 - `npm install` in both the front-end and back-end folders
 - Start up the backend on port 3000 with `node employees.js`
 - start the frontend on port 8080 with `npm run serve`
 - Navigate to `http://localhost:8080/` on your browser to check it out. 
 
## Overview
  - Backend: data stored on Node.js server built using Express.js
  - Server-side salary calculations done with Express.js middleware
  - Front-end: Built separate view components for different results, one each for the generated business card, and the salary comparison table.
  - API: Utilizing REST API design principles. Started building out entire CRUD api with unique URIs for each employee, realized later I only needed POST to create the data, and GET to read the data of a single employee.  
 - Future Work: build out the remaining pieces of the REST API, update API so it can grab data for multiple employees, not just one person. 
 - Security: if it was a real app hosted on the internet for someone's organization, you'd probably want a password-protected secure login, with passes salted and hashed. You might try connecting to an existing Identity Access Management system (Microsoft, Okta, Duo, etc.), to enable sign-in with a company email.
