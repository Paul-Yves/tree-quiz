class CreateAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :answers do |t|
      t.string :username
      t.text :answers

      t.timestamps
    end
  end
end
