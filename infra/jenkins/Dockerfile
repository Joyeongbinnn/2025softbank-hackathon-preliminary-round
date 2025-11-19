# Jenkins + AWS CLI + Docker CLI + Node + Trivy
FROM jenkins/jenkins:lts-jdk17

USER root
ENV DEBIAN_FRONTEND=noninteractive

# 공통 유틸
RUN apt-get update && apt-get install -y \
      curl unzip jq gnupg lsb-release ca-certificates git sudo \
  && rm -rf /var/lib/apt/lists/*

# AWS CLI
RUN apt-get update && apt-get install -y awscli \
  && rm -rf /var/lib/apt/lists/*

# Node.js 20 (npm 포함)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get update && apt-get install -y nodejs \
  && rm -rf /var/lib/apt/lists/*

# ESLint (선택)
RUN npm i -g eslint

# Trivy (선택)
RUN curl -L https://github.com/aquasecurity/trivy/releases/download/v0.55.2/trivy_0.55.2_Linux-64bit.deb \
     -o /tmp/trivy.deb \
  && apt-get update && apt-get install -y /tmp/trivy.deb \
  && rm -rf /var/lib/apt/lists/* /tmp/*.deb

# Docker CLI (docker.sock 사용)
RUN install -m 0755 -d /etc/apt/keyrings \
  && curl -fsSL https://download.docker.com/linux/debian/gpg \
     | gpg --dearmor -o /etc/apt/keyrings/docker.gpg \
  && chmod a+r /etc/apt/keyrings/docker.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
      https://download.docker.com/linux/debian \
      $(. /etc/os-release; echo $VERSION_CODENAME) stable" \
     > /etc/apt/sources.list.d/docker.list \
  && apt-get update && apt-get install -y docker-ce-cli \
  && rm -rf /var/lib/apt/lists/*

EXPOSE 8081
