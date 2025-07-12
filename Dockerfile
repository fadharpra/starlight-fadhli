FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y curl gnupg ca-certificates nginx && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm && \
    apt-get clean

WORKDIR /app

COPY . .

WORKDIR /app/docs
RUN pnpm install && pnpm run build

RUN rm -rf /var/www/html/* && \
    cp -r dist/* /var/www/html/

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]