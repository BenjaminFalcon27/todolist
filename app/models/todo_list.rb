class TodoList < ApplicationRecord
  has_many :entries, :dependent => :destroy

  def completion_text
    if entries.where(done: true).count>1
      "#{entries.where(done: true).count} / #{entries.count} tasks done"
    else
      "#{entries.where(done: true).count} / #{entries.count} task done"
    end

    # done_count = entries.where(done: true).count
    # "#{done_count} / #{entries.count} #{'task'.pluralize(done_count)} done"
  end

  validates :title, :uniqueness => true, :presence => true
end
