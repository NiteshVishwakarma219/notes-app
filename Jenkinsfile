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
        docker rm -f notes-container
        docker run -d --name notes-container -p 3000:3000 notes-app
        '''
    }
}
    }
}