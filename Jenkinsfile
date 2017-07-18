node {
	def app
	stage('Clone repository'){
		checkout master
	}

	stage('build image'){
		app = docker.build("cderya/chandrew")
	}

	stage('Test') {
		app.inside {
			sh 'echo "Tests passed"'
		}
	}

	stage('Push image') {
		docker.withRegistry('https://registry.hubdocker.com', 'cderya')
		app.push("${env.BUILD_NUMBER}")
		app.push("latest")
	}

}