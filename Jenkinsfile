node {
	def app
	stage('Clone repository'){
		checkout scm
	}

	stage('build image'){
		app = docker.build("getintodevops/chandrew")
	}

	stage('Test') {
		app.inside {
			sh 'echo "Tests passed"'
		}
	}

	stage('Push image') {
		docker.withRegistry('https://registry.hubdocker.com', 'docker-hub-credentials') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
	}

}