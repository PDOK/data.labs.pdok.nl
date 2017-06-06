# data.labs.pdok.nl

## local testing

- Use Git Bash
- clone the repository
- Install ruby from `https://rubyinstaller.org/downloads/`
- run `gem install bundler`
- in the root folder, run `bundler install`
- Open notepad in Adminstrator mode to change your C:\Windows\System\Drivers\etc\hosts
- Add the entry `127.0.0.1:4000 data.labs.pdok.nl`

# Troubleshooting
If you run into a SSL certificate not found error:
- Add a new system environment variable on your machine named SSL_CERT_FILE and set the value to the full file path the cacert.pem file: `export SSL_CERT_FILE=$PWD/cert/cacert.pem`.
