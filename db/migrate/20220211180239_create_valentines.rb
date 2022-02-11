class CreateValentines < ActiveRecord::Migration[6.1]
  def change
    create_table :valentines do |t|
      t.text :content
      t.timestamps
    end
  end
end
