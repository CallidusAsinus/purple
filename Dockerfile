FROM node:16
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV NODE_ENV production
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start-server"]