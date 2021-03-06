class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json    
  protect_from_forgery with: :null_session    
  skip_before_action :verify_authenticity_token  

  def index
  end
end
