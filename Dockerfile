# Alpine Linux image
FROM alpine:3.7

# Install NodeJs
RUN apk update && apk add --update nodejs nodejs-npm

# Copy the application to the container
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 1234

# Build the application
RUN npm run build

# Run the development server
CMD ["npm", "start"] 
