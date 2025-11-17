# frontend/Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 설치 단계 최적화 (캐싱 최대 활용)
COPY package*.json ./

# npm ci 사용 — package-lock.json 필요!
RUN npm ci

# 소스 복사
COPY . .

# Build
RUN npm run build


# ----------------------
# 2단계: 정적 파일 서빙
# ----------------------
FROM node:20-alpine

WORKDIR /app

# serve 설치
RUN npm install -g serve

# builder 단계에서 빌드 결과만 복사
COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
