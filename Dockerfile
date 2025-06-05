FROM node:alpine

WORKDIR /app
 
# Caching package.json 
COPY package.json .
 
RUN npm install
 
COPY . .

CMD npm build
CMD npm run start:prod