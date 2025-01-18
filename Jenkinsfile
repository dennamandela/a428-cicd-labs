node {
  docker.image('node:16-buster-slim').inside('-p 3000:3000') {
    stage('Build') {
      sh 'echo "Starting npm install..." && npm install'
    }
    stage ('Test') {
      sh './jenkins/scripts/test.sh'
    }
  }
  post {
    always {
      echo 'Pipeline completed.'
    }
    success {
      echo 'Pipeline succeeded.'
    }
    failure {
      echo 'Pipeline failed.'
    }
  }  
}         