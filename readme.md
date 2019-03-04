https://cloud.google.com/logging/docs/reference/libraries
https://github.com/googleapis/nodejs-logging

Provide authentication credentials to your application code by setting the environment variable GOOGLE_APPLICATION_CREDENTIALS. Replace [PATH] with the file path of the JSON file that contains your service account key, and [FILE_NAME] with the filename. This variable only applies to your current shell session, so if you open a new session, set the variable again.
Linux or Macos: export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
Windows with PowerShell: $env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\[FILE_NAME].json"

To view logs:
https://console.cloud.google.com/logs/viewer

To execute:
1. Set the authentication and Start the server
$ export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"
$ npm start
2. Create a log
$ google-chrome http://localhost:3000
3. Verify that the log is successfully created
https://console.cloud.google.com/logs/viewer