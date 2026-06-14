pipeline {

    agent {
        label 'windows'
    }

    stages {

        stage('Clone') {
            steps {
                echo 'Repository Ready'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t notes-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                docker stop notes-container || exit 0
                docker rm notes-container || exit 0

                docker run -d ^
                --name notes-container ^
                -p 3000:3000 ^
                notes-app
                '''
            }
        }
    }
}