FROM node:16.17

WORKDIR /app

COPY . /app/

# Install dependencies
RUN npm install --silent
RUN npm install -D --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Start application
CMD ["npm", "start"]