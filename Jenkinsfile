node {
  withEnv(["DOCKER_HOST=unix:///var/run/docker.sock"]) {
    docker.image('node:16-buster-slim').inside('-p 3000:3000') {
      stage('Build') {
        echo "Starting npm install..."
        sh 'npm install'
      }
      stage ('Test') {
        echo "Running tests..."
        sh './jenkins/scripts/test.sh'
      }
    }
  }
}         