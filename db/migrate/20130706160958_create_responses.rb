class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :word_id
      t.integer :adjective_id
      t.boolean :positive
      t.timestamps
    end
  end
end
