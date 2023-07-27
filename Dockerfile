FROM nginx:stable-alpine

RUN apk add --update nodejs npm

RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

WORKDIR /app

COPY . .

RUN exec sh &&\
    pnpm install --frozen-lockfile &&\
    pnpm run build

RUN cp -r /app/dist/* /usr/share/nginx/html

EXPOSE 80