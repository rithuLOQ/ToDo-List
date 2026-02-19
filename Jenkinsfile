pipeline {
    agent any

    // Defining multiple parameters to fulfill Task 3
    parameters {
        string(name: 'BUILD_NAME', defaultValue: 'Release_1.0', description: 'Enter Build Name')
        booleanParam(name: 'RUN_TEST', defaultValue: true, description: 'Run tests?')
        choice(name: 'ENVIRONMENT', choices: ['DEV', 'TEST', 'PROD'], description: 'Select Environment')
    }

    stages {
        // Task 1: Checkout repository
        stage('Task 1: Checkout') {
            steps {
                checkout scm
            }
        }

        // Task 2: Display Jenkins workspace path using environment variable
        stage('Task 2: Workspace Info') {
            steps {
                // 'WORKSPACE' is a built-in Jenkins environment variable
                echo "The current Jenkins workspace is located at: ${env.WORKSPACE}"
                
                // Using BAT to show the directory path in the shell
                bat "echo Current Directory: %WORKSPACE%"
            }
        }

        // Task 3: Print all parameter values in console
        stage('Task 3: Parameter Summary') {
            steps {
                echo "--- Summary of Parameters ---"
                echo "Build Name: ${params.BUILD_NAME}"
                echo "Run Test: ${params.RUN_TEST}"
                echo "Selected Environment: ${params.ENVIRONMENT}"
            }
        }
    }
}