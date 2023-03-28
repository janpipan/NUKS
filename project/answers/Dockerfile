FROM node:alpine

WORKDIR /app
# install dependencies
COPY package.json .
RUN npm install
# copy everything else
COPY . .

CMD ["npm", "start"]
