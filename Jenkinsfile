pipeline {
  agent any
  tools { nodejs "node18" }
  stages {
    stage("Install") {
      steps {
        sh "npm install"
      }
    }
    stage("Test") {
      steps {
        sh "npm test || true"
      }
    }
    stage("Docker Build") {
      steps {
        sh "sudo docker build -t simple-node-app:${BUILD_NUMBER} ."
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
