class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries do |t|
      t.string :name
      t.boolean :done

      t.references :todo_list, :index => true

      t.timestamps
    end
  end
end
