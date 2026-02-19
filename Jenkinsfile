pipeline {
    agent any

    stages {
        stage('Task 1: Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup: Ensure File Exists') {
            steps {
                // Creating the file again just in case it was deleted in previous runs
                bat 'echo Cleaning up... > newfile.txt'
                echo "Verified newfile.txt exists for deletion."
            }
        }

        // Task 2: Delete the file using BAT command
        stage('Task 2: Delete File') {
            steps {
                // 'del' is the Windows command to delete a file
                bat 'del newfile.txt'
                echo "File newfile.txt has been deleted."
            }
        }

        // Task 3: Confirm deletion using directory listing
        stage('Task 3: Confirm Deletion') {
            steps {
                echo "Checking workspace for newfile.txt:"
                // 'dir' will list files; we expect newfile.txt to be missing
                bat 'dir'
            }
        }
    }
}