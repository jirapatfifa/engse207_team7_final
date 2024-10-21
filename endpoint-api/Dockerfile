FROM node:20
WORKDIR /app
RUN git clone https://github.com/jirapatfifa/endpoint-api.git /app
RUN git pull
RUN npm install
COPY ./server.key /app
COPY ./server.crt /app
EXPOSE 8700 8701
CMD ["node", "webreport-api-https"]