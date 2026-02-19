pipeline {
    agent any

    // Task 2: Define Boolean, Choice, and String parameters
    parameters {
        booleanParam(name: 'RUN_TEST', defaultValue: true, description: 'Task 2: Check to execute the test stage')
        choice(name: 'BROWSER', choices: ['Chrome', 'Firefox', 'Edge'], description: 'Select a browser for the test')
        string(name: 'TEST_NAME', defaultValue: 'Smoke Test', description: 'Enter the name of the test')
    }

    stages {
        // Task 1: Checkout code from GitHub
        stage('Task 1: Checkout') {
            steps {
                checkout scm
                echo "Code checked out from: https://github.com/rithuLOQ/ToDo-List.git"
            }
        }

        // Task 3: If RUN_TEST is true, execute BAT command
        stage('Task 3: Execute Test') {
            steps {
                script {
                    if (params.RUN_TEST) {
                        // This executes the BAT command as per the objective
                        bat "echo Running ${params.TEST_NAME} on ${params.BROWSER}"
                    } else {
                        echo 'Test stage was skipped because RUN_TEST is false.'
                    }
                }
            }
        }
    }
}