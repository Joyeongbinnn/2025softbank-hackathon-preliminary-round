# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 환경변수 이용해서 REACT_APP_API_URL 등 주입 가능
RUN npm run build

# 정적 배포용
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
