class Adjective < ActiveRecord::Base

  attr_accessible :active, :adjective
  has_many :responses
end
