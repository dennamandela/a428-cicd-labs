node {
  docker.image('node:16-buster-slim').inside('-p 3000:3000') {
    stage('Build') {
      sh 'echo "Starting npm install..." && npm install'
    }
    stage ('Test') {
      sh './jenkins/scripts/test.sh'
    }
    stage ('Manual Approval') {
      script {
        try {
          input message: 'Lanjutkan ke tahap deploy? (Klik "Proceed" untuk melanjutkan atau "Abort" untuk membatalkan)'
        } catch (err) {
          error("🚨 Deployment aborted by user.")
        }
      }
    }
    stage ('Deploy') {
      sh './jenkins/scripts/deliver.sh' 
      echo '✅ Aplikasi berhasil di-deploy. Menunggu 1 menit sebelum otomatis berhenti...' 
      sh 'sleep 60'
      echo '⏳ Waktu habis. Menghentikan aplikasi...'
      sh './jenkins/scripts/kill.sh'
    }
  }
}         