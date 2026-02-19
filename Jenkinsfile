pipeline {
    agent any

    stages {
        stage('Task 1: Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup: Create File') {
            steps {
                // Ensuring sample.txt exists before we try to rename it
                bat 'echo Initial content > sample.txt'
                echo "Created sample.txt for renaming."
            }
        }

        // Task 2: Rename sample.txt to newfile.txt
        stage('Task 2: Rename File') {
            steps {
                // 'ren' is the Windows command for rename (old_name new_name)
                bat 'ren sample.txt newfile.txt'
                echo "File renamed from sample.txt to newfile.txt."
            }
        }

        // Task 3: List all files to confirm rename operation
        stage('Task 3: Confirm Rename') {
            steps {
                // 'dir' lists all files in the current workspace directory
                echo "Listing files in workspace:"
                bat 'dir'
            }
        }
    }
}