FROM node:14.17.6-alpine3.13

WORKDIR /app

COPY package*.json /app/
RUN npm ci
COPY . /app
RUN npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000
