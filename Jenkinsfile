pipeline {
    agent any

    stages {
        stage('Task 1: Checkout') {
            steps {
                checkout scm
            }
        }

        // Task 2: Append new data to sample.txt
        stage('Task 2: Append Data') {
            steps {
                // Check if file exists first, then append
                // '>>' appends to the file, while '>' overwrites it
                bat 'echo This is the first line. > sample.txt'
                bat 'echo This is the second line added in Version 2. >> sample.txt'
                bat 'echo This is the third line for testing. >> sample.txt'
                echo "Data appended to sample.txt successfully."
            }
        }

        // Task 3: Count number of lines in file
        stage('Task 3: Count Lines') {
            steps {
                script {
                    echo "Counting lines in sample.txt..."
                    // 'find /c /v ""' is the Windows trick to count lines in a file
                    bat 'find /c /v "" sample.txt'
                }
            }
        }
    }
}