# backend/Dockerfile
FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV DJANGO_SETTINGS_MODULE=config.settings


# collectstatic 는 추후 static 설정 후 활성화
# RUN python manage.py collectstatic --noinput

EXPOSE 8080

# Run the production server
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8080", "--workers", "4"]

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8080"]
