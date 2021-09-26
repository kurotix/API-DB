FROM node:latest
RUN git clone https://github.com/kurotix/API-DB
WORKDIR ./db_projet
RUN npm install
CMD npm start
EXPOSE 3000