# data.labs.pdok.nl

## local testing

- Clone this Git repositoy:

  - On Linux: `git clone https://github.com/PDOK/data.labs.pdok.nl`

  - On Windows: use Git Bash

- Install ruby:

  - On Fedora: `sudo dnf install ruby ruby-devel rubygem-json`

  - On Ubuntu: `sudo apt-get install zlib1g-dev libffi-dev ruby-full ruby-dev`

  - On Windows: download and install from https://rubyinstaller.org/downloads

- Run `gem install bundler`.

- From the project root directory, run `bundler install`

- Now, you can run ./serve.sh from should be able to run `jekyll
  serve`.  If you encounter any trouble on dependencies, you can try
  alternatively `bundler exec jekyll serve`.

- the site is now available on
  [http://localhost:4000](http://localhost:4000).  If you have other
  services running on this port, you can edit `_config.yml` to have
  Jekyll run on a different port.

## Troubleshooting

If you run into a SSL certificate not found error:

- Add a new system environment variable named `SSL_CERT_FILE` and set
  its value to the full file path to the `cacert.pem` file:

  - In Bash: `export SSL_CERT_FILE=$PWD/cert/cacert.pem`
