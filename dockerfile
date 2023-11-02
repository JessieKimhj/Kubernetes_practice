# FROM node:latest
# LABEL maintainer="HyunJin Kim"
# WORKDIR /app
# COPY . /app
# RUN npm install
# # COPY . .
# EXPOSE 8080
# CMD ["node", "/app.js"]
FROM node:14
WORKDIR /app
COPY . /app
# EXPOSE 30000
RUN npm install
CMD ["node", "app.js"]
