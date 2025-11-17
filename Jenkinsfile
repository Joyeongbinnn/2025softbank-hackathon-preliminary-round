pipeline {
    agent any

    environment {
        INFRA_DIR = 'infra'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build & Deploy') {
            steps {
                dir("${INFRA_DIR}") {
                    sh '''
                    docker compose build backend frontend
                    docker compose up -d backend frontend
                    '''
                }
            }
        }
    }
}
