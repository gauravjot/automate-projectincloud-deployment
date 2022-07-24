FROM nginx:1.23.0
COPY nginx.conf /etc/nginx/sites_available/
COPY build/ /usr/share/nginx/html/
RUN ls -lh /usr/share/nginx/html/*
EXPOSE 80/tcp