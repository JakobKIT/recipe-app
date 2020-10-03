FROM node:latest


WORKDIR /usr/src/app
COPY . /usr/src/app
ENV PORT 5000

RUN npm install 

ENTRYPOINT ["npm", "start"]