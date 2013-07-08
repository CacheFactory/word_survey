class Word < ActiveRecord::Base

  attr_accessible :active, :word
  has_many :responses
end
