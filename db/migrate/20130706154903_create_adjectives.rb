class CreateAdjectives < ActiveRecord::Migration
  def change
    create_table :adjectives do |t|
      t.string :adjective
      t.boolean :active

      t.timestamps
    end
  end
end
