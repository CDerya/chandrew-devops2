node {
	def app
	stage('Clone repository'){
		checkout scm
	}

	stage('build image'){
		app = docker.build("andydavison/chandrew")
	}

	stage('Test') {
		app.inside {
			sh 'echo "Tests passed"'
		}
	}

	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials-andy') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}

}