class Entry < ApplicationRecord

  # Associations

  belongs_to :todo_list

  # Callbacks

  # before_save :undone

  # def undone
  #   if self.done.nil?
  #     self.done = false
  #   end
  # end

  # Validations

  validates :done, :inclusion => [true, false]
end
