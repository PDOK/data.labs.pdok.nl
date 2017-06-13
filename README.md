# data.labs.pdok.nl

## local testing

- Use Git Bash
- clone the repository
- Install ruby from `https://rubyinstaller.org/downloads/`
- run `gem install bundler`
- in the root folder, run `bundler install`
- now, you should be able to run `jekyll serve`. If you encounter any trouble on dependencies, you can try alternatively `bundler exec jekyll serve`
- the site is now available on [http://localhost:4000](http://localhost:4000). If you have other services running on this port, you can alter the contents of _config.yml to have Jekyll run on a different port.

# Troubleshooting
If you run into a SSL certificate not found error:
- Add a new system environment variable on your machine named SSL_CERT_FILE and set the value to the full file path the cacert.pem file: `export SSL_CERT_FILE=$PWD/cert/cacert.pem`.
