require 'cuba'

Cuba.use Rack::Static, urls: [""],
                       root: 'public',
                       index: 'index.html'

Cuba.define do
  on get do
    res.write "hello world"
  end
end
