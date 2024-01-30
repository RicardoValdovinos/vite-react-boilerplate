FROM nginx:stable-alpine

WORKDIR /app

COPY . .

RUN cp -r /app/dist/* /usr/share/nginx/html

EXPOSE 80