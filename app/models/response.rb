class Response < ActiveRecord::Base

   attr_accessible :word_id, :positive, :adjective_id
   belongs_to :word
   belongs_to :test
   belongs_to :adjective
end
