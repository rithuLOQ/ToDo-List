pipeline {
    agent any

    // Task 2: Define Choice parameter with DEV, TEST, PROD
    parameters {
        choice(
            name: 'ENVIRONMENT', 
            choices: ['DEV', 'TEST', 'PROD'], 
            description: 'Task 2: Select the target environment'
        )
    }

    stages {
        // Task 1: Checkout updated repository version
        stage('Task 1: Checkout') {
            steps {
                checkout scm
                echo "Updated repository version checked out."
            }
        }

        // Task 3: Print selected environment in console
        stage('Task 3: Display Environment') {
            steps {
                // This prints the choice selected by the user
                echo "The selected environment is: ${params.ENVIRONMENT}"
                
                // Using a BAT command to show it in the shell output
                bat "echo DEPLOYING TO ${params.ENVIRONMENT} MODE"
            }
        }
    }
}