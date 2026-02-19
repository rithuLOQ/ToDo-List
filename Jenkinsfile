pipeline {
    agent any

    stages {
        // Task 1: Checkout repository
        stage('Task 1: Checkout') {
            steps {
                checkout scm
                echo "Source code checked out successfully."
            }
        }

        // Task 2: Create sample.txt file using BAT
        stage('Task 2: Create File') {
            steps {
                // The '>' symbol creates the file and writes the text into it
                bat 'echo Hello, this is a sample file created by Jenkins > sample.txt'
                echo "File 'sample.txt' has been created in the workspace."
            }
        }

        // Task 3: Display file content in console
        stage('Task 3: Display Content') {
            steps {
                // 'type' is the Windows command to read a file's content
                echo "Reading content of sample.txt:"
                bat 'type sample.txt'
            }
        }
    }
}