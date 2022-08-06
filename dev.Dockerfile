FROM node:16
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 8080
CMD ["npm", "start"]