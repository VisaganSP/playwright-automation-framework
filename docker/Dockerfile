FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx playwright install

ENV CI=true
ENV HEADLESS=true

CMD ["npm", "test"]
