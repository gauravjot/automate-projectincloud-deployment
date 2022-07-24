FROM nginx:1.23.0
COPY nginx.conf /etc/nginx/sites_available/
RUN ls -l
COPY build/* /usr/share/nginx/html/
EXPOSE 80/tcp