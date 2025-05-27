# Add these outputs to your existing main.tf
output "application_name" {
  value = aws_elastic_beanstalk_application.node-dashboard-app.name
}

output "environment_name" {
  value = aws_elastic_beanstalk_environment.node-dashboard-env.name
}

output "endpoint_url" {
  value = aws_elastic_beanstalk_environment.node-dashboard-env.endpoint_url
}