## End-end Data Pipeline - Demo


### Features
 - system fetches and shares raw data from an external API of a clothing shop

 - Visualize data on browser through Flask API endpoints

 - Containerized using Docker and CICD pipeline automated using GitHub Action\


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
app:
- crud
- database
- main
- models
- schemas

environment:
venv

CICD & packages:
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