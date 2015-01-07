require 'cuba'

Cuba.use Rack::Reloader

require_relative "lib/server"

run Cuba
