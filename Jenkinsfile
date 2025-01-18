node {
  stage('Build') {
    sh 'echo "Starting npm install..." && npm install'
  }
  stage ('Test') {
    sh './jenkins/scripts/test.sh'
  }    
}         
