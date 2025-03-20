FROM python:3.9

WORKDIR /app
COPY . /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY app /app/app

RUN ls -l /app/app

ENV PYTHONPATH=/app

EXPOSE 8000

CMD ["python", "app/main.py"]
