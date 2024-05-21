FROM node:18-alpine
WORKDIR index.js /usr/share/node/html/
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start "]
