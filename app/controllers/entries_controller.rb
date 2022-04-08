class EntriesController < ApplicationController
  before_action :find_todo_list
  before_action :find_entry, :only => [:update, :toggle, :edit, :destroy]


  # # GET /entries
  # def index
  #   @entries = Entry.all
  # end

  # # GET /entries/1
  # def show
  # end

  # GET /entries/new
  def new
    @entry = @todo_list.entries.new(:done => false)
  end

  # GET /todo_lists/1/edit
  def edit
  end

  # POST /todo_lists
  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      redirect_to @todo_list, notice: "Entry was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_lists/1
  def update
    if @entry.update(entry_params)
      redirect_to @todo_list, notice: "entries was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

    #Change entry status as "done"
  def toggle
    @entry.update(:done => !@entry.done)

    redirect_to @todo_list
  end

    # DELETE /entry/1
  def destroy
    @entry.destroy
    redirect_to @todo_list, notice: "entry was successfully destroyed."
  end

  def count_checked
    @todo_list.entries.count.where(done: true)
  end

  def count_unchecked
  end

  private

  private

  def find_todo_list
    id = params[:todo_list_id]
    @todo_list = TodoList.find(id)
  end

  def find_entry
    id = params[:id]
    @entry = @todo_list.entries.find(id)
  end

  # Only allow a list of trusted parameters through.
  def entry_params
    params.require(:entry).permit(:id, :name, :todo_list_id, :done)
  end




end
