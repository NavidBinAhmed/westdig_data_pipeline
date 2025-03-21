## End-end Data Pipeline - Demo
This repo contains tech-stacks that demonstrates a mini data pipeline and dashboard visualization that leverages an e-commerce API

### Features
 - System fetches and shows raw data in a json formant from an external API from an e-commerce platform

 - Shows data on browser through FastAPI endpoints

 - Visualizes on a React webapp as a dashboard 

 - Containerized using Docker and CICD pipeline using GitHub Action (ongoing)


### Tools used
- fastapi 
- sqlalchemy 
- psycopg2 
- pandas 
- requests
- alembic 
- uvicorn
- Postgresql
- PGAdmin 4
- React


### Structure
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
- README.md
- requirements.txt

### Procedure
Step 1:
- Create virtual environment and activation of environment
- Installation of requirements
- API end points define in 'main.py'
- Build Dockerfile and Yaml file

Step 2:
- Build Docker container:

`docker build --no-cache -t data-pipeline .      `

- Run Docker image :

`docker run -p 8000:8000 data-pipeline`

- Run Flask Backend:

`uvicorn app.main:app --reload`

- Run React Frontent
`npm start`

Step 3:
- Frontend dashboard using React

Step 4:
- Automate CICD using GitHub Action

Step 5:
- Deployment


### Deployment on Render
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


- **Deployed Backend FastAPI Link:** [Link](https://wddp.onrender.com)

- **Deployed Frontend React Link:** [Link]

- **Deployed Combined Link:** [Link]


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



### Run Locally
- Download the repo
- Go to the directory
- Activate the environment: `venv\Scripts\activate`
- Run FastAPI: `uvicorn app.main:app --reload`
- Run React app: `npm start`

Note:
The required packages are installed inside the `venv`.
To install a specific version, update in the `requirements.txt` and run the following command after the activation of venv:
`pip install -r requirements.txt`

Thank you,
for any installation related help, don't hesitate to give a heads up.