FROM node:16

COPY . .

RUN npm install

EXPOSE 5050

CMD node index.js