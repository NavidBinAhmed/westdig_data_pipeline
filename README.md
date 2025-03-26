## End-end Data Pipeline
This repo contains tech-stacks that demonstrates a mini data pipeline and dashboard visualization that leverages an e-commerce API


### having deployment issue- comnbined back and frontend is encounrering troubleshoot (working)


### Features
 - System fetches and shows raw data on browser in a json formant from an external e-commerce API

 - Visualizes on a React webapp as a dashboard 

 - Containerized using Docker and automated CI/CD pipeline using GitHub Action

 - Deployed on cloud server - Render


### Tools used
- fastapi 
- sqlalchemy 
- psycopg2 
- pandas 
- requests
- alembic 
- uvicorn
- unicorn
- Postgresql
- PGAdmin 4
- React


### Project Structure
app: FastAPI backend
- crud
- database
- main
- models
- schemas

dashboard: React frontend
- src
- package json

environment:
- venv

CICD & Packages:
- .gitignore
- Dockerfile
- .github/workflows and main.yml
- README.md
- requirements.txt


### Procedure
Step 1:
- Create virtual environment and activation ironment
- Installation uirements

Step 2:
- Backend API end-points, methods, database in i.e., 'main.py'

Step 3:
- Frontend dashboard using React in i.e., 'App.js'

Step 4:
- Write 'main.yml' file inside '.github\workflows' directory
With every new commits, this automates CI/CD using GitHub Action

Step 5:
- Build Dockerfile

- Build Docker container

`docker build --no-cache -t data-pipeline .      `

- Run Docker image 

`docker run -p 8000:8000 data-pipeline`

- Run Dashboard (React Frontent)

`npm start`

- Run Flask Backend Specifically (to test various endpoints)

`uvicorn app.main:app --reload`

Step 6:
- Deployment on Render, correct CI/CD should do it automatically every time a new change is made.


### Deployment on Render [NYD]
1. Picked `Webservices`

2. Selected `Git Public Repository` (for privet repository, sign-in to GitHub under 'Git Provider' is required)

3. Next, picked a Name as URL, and Python 3 as *Language

4. Branch is main and Region is Oregon as default

5. Keep Root Directory as it is, it will redirect from GitHub

6. `Build Command`
- pip install -r requirements.txt

`Start Command` ( app.api_file.py:app )
- gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app

7. Select Subscription Plan, Free in my case

8. Click Deploy Web Service

- **Deployed Data Pipeline Dashboard Link:** [NYD]


### Data Visualization Dashboard
- Real Time Dashboard on React app

![reactdb](https://github.com/user-attachments/assets/5a99c83a-b9ec-4d65-b9d7-17e348a67010)


- Data stored on PGAdmin (PostgreSQL database)

![onpgadmin_db](https://github.com/user-attachments/assets/18caa943-6f98-462d-b563-14f3a02c9264)


- Fetching data (POST method)

![fetch_products](https://github.com/user-attachments/assets/c53ffe6f-bba9-41c0-bce2-8ed125d1d26e)


- Required data (GET method)

![products_browser](https://github.com/user-attachments/assets/839d5690-e4a9-47aa-931b-d9af79403991)


- Original data source (API)

![fakeapi](https://github.com/user-attachments/assets/b3efdd26-9674-4195-a01f-16164e1b7c18)


### How Issues Encountered Were Solved: Troubleshoot
1. React functioal issue: no log was found on console for 'fetch_products'
- CORS middleware has been enabled to make the data_fetching functional on the react console.

2. CI/CD issue: Failure multiple times due to script error
- Modified and worked fine
- Added deployment script in production (for AWS)

3. Deployment on Render issue: Comnbined back and front end was encounrering troubleshoot (ongoing)
Steps to fix:
- uvicorn & unicorn
- cloud database setup
- retry 
It should upgrade the systen fron local database, PGAdmin 4 for my case, to cloud.


### Run Locally
- Download the repo
- Go to the root directory
- Activate the environment: `venv\Scripts\activate`
- Run FastAPI from root: `uvicorn app.main:app --reload`
- Get into 'dashboard' and run React app: `npm start`
 on Render
Note:
The required packages are installed inside the `venv`.
To install a specific version, update in the `requirements.txt` and run the following command after the activation v:
`pip install -r requirements.txt`

Thank you,
for any installation related help, don't hesitate to give a heads up.