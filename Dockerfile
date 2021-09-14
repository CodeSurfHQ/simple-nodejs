FROM node:14

WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

CMD ["npm", "run", "start"]
EXPOSE 3000