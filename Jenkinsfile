pipeline {
    agent any

    // Task 2: Define string parameter BUILD_NAME
    parameters {
        string(name: 'BUILD_NAME', defaultValue: 'Build_v1.0', description: 'Task 2: Enter the name of this build')
    }

    stages {
        // Task 1: Checkout repository
        stage('Task 1: Checkout') {
            steps {
                checkout scm
                echo "Repository checkout complete."
            }
        }

        // Task 3: Create a file with BUILD_NAME as its content
        stage('Task 3: Create Build File') {
            steps {
                script {
                    // This BAT command creates a file named 'build_info.txt' 
                    // and writes the BUILD_NAME into it.
                    bat "echo ${params.BUILD_NAME} > build_info.txt"
                    
                    echo "File 'build_info.txt' has been created with content: ${params.BUILD_NAME}"
                }
            }
        }

        stage('Verify File') {
            steps {
                // Let's verify the file was actually created and show its content
                bat "type build_info.txt"
            }
        }
    }
}