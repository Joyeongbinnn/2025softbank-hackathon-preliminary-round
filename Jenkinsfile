pipeline {
    agent any

    environment {
        INFRA_DIR = 'infra'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build backend') {
            steps {
                dir("${INFRA_DIR}") {
                    sh '''
                      echo "[BUILD] backend Docker image"
                      docker compose build backend
                    '''
                }
            }
        }

        stage('Build frontend') {
            steps {
                dir("${INFRA_DIR}") {
                    sh '''
                      echo "[BUILD] frontend Docker image"
                      docker compose build frontend
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                dir("${INFRA_DIR}") {
                    sh '''
                      echo "[DEPLOY] backend & frontend containers"
                      docker compose up -d backend frontend

                      echo "[CLEAN] unused images"
                      docker image prune -f
                    '''
                }
            }
        }
    }
}
