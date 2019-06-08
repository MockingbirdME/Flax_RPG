#!/usr/bin/env groovy

pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile.jenkins-agent'
            args '-v /var/run/docker.sock:/var/run/docker.sock -v /etc/passwd:/etc/passwd -v /var/lib/jenkins:/var/lib/jenkins'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'

                // Build the image.
                script {
                    image = docker.build("jftanner/flax")
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        image.push('latest')
                    }
                    sshagent(['jenkins.ssh']) {
                        sh 'ssh docker.tanndev.com rm -rf flax'
                        sh 'ssh docker.tanndev.com mkdir flax'
                        sh 'scp docker-compose.yml docker.tanndev.com:flax/'
                        sh 'ssh docker.tanndev.com "cd flax && docker-compose pull app"'
                        sh 'ssh docker.tanndev.com "cd flax && docker-compose up -d"'
                    }
                }
                slackSend channel: '#flax', color: 'good', message: 'Successfully published <https://flax.tanndev.com|Flax Website>.'
            }
        }
    }

    post {
        failure {
            slackSend channel: '#flax', color: 'danger', message: "Failed to build/publish Flax Website. (<${env.JOB_URL}|Pipeline>) (<${env.BUILD_URL}console|Console>)"
        }
    }
}
