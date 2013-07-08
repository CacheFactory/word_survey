class ReportsController < ApplicationController
  def index
    @adjectives=Adjective.all
    @words=Word.all
  end
end