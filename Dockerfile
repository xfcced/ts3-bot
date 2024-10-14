FROM node:lts-slim
WORKDIR /app
ENTRYPOINT [ "node","index.js" ]
COPY . .
RUN npm install
# CMD [ "node","index.js" ]