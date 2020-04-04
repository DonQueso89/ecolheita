FROM python:3.8-slim

ARG USER_ID
ARG GROUP_ID
RUN addgroup --gid $GROUP_ID comtruise
RUN adduser --disabled-password --gid $GROUP_ID --uid $USER_ID --gecos '' comtruise

COPY ./requirements.txt /requirements.txt
RUN apt -y update && apt -y install libpq-dev && pip install -r requirements.txt 

VOLUME /app
WORKDIR /app

USER comtruise
EXPOSE 8080

CMD ["/usr/local/bin/python", "manage.py", "runserver", "0.0.0.0:8080"]
