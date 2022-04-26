class TodoListsController < ApplicationController
  before_action :find_todo_list, only: %i[ show edit update destroy ]

  # GET /todo_lists
  def index
    @todo_lists = TodoList.where(
      "title LIKE ?",
      "%#{params[:search_by_title]}%"
    )

    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @todo_lists }
    end
  end

  # GET /todo_lists/1
  def show
  end

  # GET /todo_lists/new
  def new
    @todo_list = TodoList.new
  end

  # GET /todo_lists/1/edit
  def edit
  end

  # POST /todo_lists
  def create
    @todo_list = TodoList.new(todo_list_params)
    if @todo_list.save
      respond_to do |format|
        # IF HTML REQUEST
        format.html do 
          redirect_to @todo_list, notice:"Todo list was successfuly created" 
        end
        # IF JSON REQUEST
        format.json do
          # SEND THE NEW TODOLIST IN JSON FORMAT
          render :json => @todo_list
        end
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_lists/1
  def update
    if @todo_list.update(todo_list_params)
      respond_to do |format|
        # IF HTML REQUEST
        format.html do 
          redirect_to @todo_list, notice:"Todo list was successfuly updated" 
        end
        # IF JSON REQUEST
        format.json do
          # SEND THE NEW TODOLIST IN JSON FORMAT
          render :json => @todo_list
        end
      end
    else
      render :edit, status: :unprocessable_entity
    end
  end 

  # DELETE /todo_lists/1
  def destroy
    @todo_list.destroy   
    @todo_lists = TodoList.where(
      "title LIKE ?",
      "%#{params[:search_by_title]}%"
    ) 
    respond_to do |format|
      # IF HTML REQUEST
      format.html do 
        redirect_to todo_lists_path, notice:"Todo list was successfuly destroyed" 
      end
      # IF JSON REQUEST
      format.json do
        render :json => @todo_lists
      end
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def find_todo_list
    id = params[:id]
    @todo_list = TodoList.find(id)
  end

  # Only allow a list of trusted parameters through.
  def todo_list_params
    params.require(:todo_list).permit(:title)
  end
end
