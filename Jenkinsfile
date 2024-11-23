pipeline {
    agent any

    stages {
        stage("Instalar Depensências") {
            steps {
                script {
                    bat "npm install"
                }
            }
        }

        stage("Executar Testes") {
            steps {
                script {
                    bat "npm test"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline concluído"
        }
    }
}