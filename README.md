## Full-stack end-end data pipeline with deployment using FastAPI, React and Render
This repo contains tech-stacks that demonstrates a mini data pipeline and dashboard visualization that leverages an e-commerce API


### Features
 - System fetches data on browser in a json formant from an external e-commerce API

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
- Render
- VS Code

[![Tools](https://skillicons.dev/icons?i=python,fastapi,react,postgresql,vscode,github,&theme=light)](https://skillicons.dev)

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
- Render.yaml


### Procedure
Step 1:
- Create virtual environment and activation ironment
- Installation of requirements

Step 2:
- Build backend API end-points, database in i.e., `app`

Step 3:
- Build frontend dashboard using React in i.e., `dashboard`

Step 4:
- Implement CI/CD and `main.yml` file inside `.github\workflows` directory
- With every new commits, this automates CI/CD using GitHub Action

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
- For the deployment on Render, created cloud database `fastapidb' on Render 
- Updated `env_variable` on Render and database URL in `database.py` file
- Deploy backend, update deployed API URL on `App.js` and deploy frontend
- correct CI/CD should do it automatically every time a new change is made.


### Deployment on Render - Backend 
1. Created `Postgres` database on Render which migrated local database from PGAdmin to cloud

2. Updated Environemnt Variable with `Internal Database URL`

3. Picked `Webservices`

4. Selected `Git Public Repository` (for privet repository, sign-in to GitHub under 'Git Provider' is required)

5. Next, picked the URL, and Python 3 as Language

6. Branch is main and Region is Oregon as default

7. Keep Root Directory as it is, it will redirect from GitHub

8. `Build Command`
- pip install -r requirements.txt

`Start Command`
- uvicorn app.main:app --host 0.0.0.0 --port 8000

9. Select Subscription Plan, Free in my case

Please state`

**Deployment on Render - Frontend** 
After running build version for production, exceptions are in the followings only:

3. Picked `New Static Site`

8. `Build Command`
- npm install && npm run build

or (via Settings page, if there needs to update)
- cd dashboard && npm install && npm run build

`Publish Directory`
- build

or (via Settings page, if there needs to update)
- dashboard/build


**Deployed Data Pipeline Dashboard:** [**Link**](https://wddp.onrender.com/) ; [**Backend**](https://fastapi-f3s0.onrender.com/)


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

3. 1. Deployment on Render issue
Steps to fix:
- uvicorn & unicorn
- set up concurrently
- cloud database setup

    Cloud database on Render upgrades DBMS fron local database, PGAdmin 4 for my case, to cloud.
    The app was deployed separately as to make it easier for debugging and collaboration (industry standard).

3. 2. Frontend deployment issue
 Resolved by using the following build and publish commands on Render's `Settings` page:
- cd dashboard && npm install && npm run build
- dashboard/build

### Run Locally
- Download the repo
- Go to the root directory
- Activate the environment: `venv\Scripts\activate`
- Run FastAPI from root: `uvicorn app.main:app --reload`
- Get into 'dashboard' and run React dashboard app: `npm start`
- Backend: http://127.0.0.1:8000
- Frontend: http://localhost:3000

Please state:
The required packages are installed inside the `venv`.
To install a specific version, update in the `requirements.txt` and run the following command after the activation v:
`pip install -r requirements.txt`

Thank you!