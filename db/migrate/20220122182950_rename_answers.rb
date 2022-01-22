class RenameAnswers < ActiveRecord::Migration[6.1]
  def change
    rename_column :answers, :answers, :user_answers
  end
end
