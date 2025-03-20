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
- main.py files inside 'app' folder
- API end points define
- Build Dockerfile and Yaml file

Step 2:
- Build Docker container:
docker build --no-cache -t data-pipeline .      

- Run Docker image :
docker run -p 8000:8000 data-pipeline

- Run via Flask:
uvicorn app.main:app --reload

Step 3:
- Automate CICD using GitHub Action

Step 4:
- Build a frontemnd using Tablaue or FET


### Demo application

![onpgadmin_db](https://github.com/user-attachments/assets/18caa943-6f98-462d-b563-14f3a02c9264)

![fetch-products](https://github.com/user-attachments/assets/c459c050-3db1-4681-8047-be75347e0960)

![products_browser](https://github.com/user-attachments/assets/839d5690-e4a9-47aa-931b-d9af79403991)