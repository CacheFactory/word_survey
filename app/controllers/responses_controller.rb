class ResponsesController <ApplicationController

  def index
    @app_data={}
    @app_data[:words]=Word.all
    @app_data[:adjectives]=Adjective.all

  end

  def create
    @new_response = Response.new(params[:response])
    @new_response.save
    render json: @new_response
  end

end