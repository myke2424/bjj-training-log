FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install
COPY . /app
CMD ["nodemon", "index.js"]
EXPOSE 8080