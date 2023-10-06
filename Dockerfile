FROM node:16

WORKDIR /user

# Install Packages
COPY package*.json ./

#Running The Command
RUN npm install

# Bundle app source
COPY . .

# Expose The PORT NUMBER
EXPOSE 8082

# Command To Run
CMD [ "npm", "run" ,"dev-server"]
