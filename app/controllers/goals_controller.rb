class GoalsController < ApplicationController
  def new 
    @food_habits_more = FoodHabit.where(amount: 'more').order('name')
    @food_habits_less = FoodHabit.where(amount: 'less').order('name')

    @goal = current_user.goal

    if @goal.nil?
      @goal = current_user.build_goal
    else
      redirect_to edit_goal_path(@goal)
    end
  end

  def create
    #@goal = current_user.create_goal(goal_params)
    @goal = current_user.build_goal(goal_params)
    #@goal.save

    set_food_habit_ids

    if @goal.save
      flash[:success] = "Save successful"
      redirect_to edit_goal_path(@goal) 
    else
      render "new"
    end

#    params[:goal][:food_habits_less_names].each { |id| current_user.goal.food_habits_goals.create(food_habit_id: id, goal_id: @goal.id) } unless params[:goal][:food_habits_less_names].nil?
#
#    params[:goal][:food_habits_more_names].each { |id| current_user.goal.food_habits_goals.create(food_habit_id: id, goal_id: @goal.id) } unless params[:goal][:food_habits_more_names].nil?
  end

  def edit
    @food_habits_more = FoodHabit.more_amount
    @food_habits_less = FoodHabit.less_amount
    
    @goal = current_user.goal if @goal.nil?
    #@goal = User.includes(:goal).find(current_user.id).goal
  end

  def update
    #@goal = User.includes(:goal).find(current_user.id).goal
    @goal = current_user.goal

    set_food_habit_ids

    if @goal.update_attributes(goal_params)
      flash[:success] = "Save success"
      redirect_to edit_goal_path(@goal)
    else
      render "edit"
    end
  end

  private
    def goal_params
      params.require(:goal).permit(:main, :preferred_units)
    end

    def set_food_habit_ids
      if !params[:goal][:food_habits_more_names].nil? && !params[:goal][:food_habits_less_names].nil? then
        merged_food_habits = params[:goal][:food_habits_more_names].zip(params[:goal][:food_habits_less_names]).flatten.compact
        @goal.food_habit_ids = merged_food_habits 
      elsif params[:goal][:food_habits_more_names].nil? && params[:goal][:food_habits_less_names].nil? then
        @goal.food_habit_ids = []
      elsif !params[:goal][:food_habits_more_names].nil? then
        @goal.food_habit_ids = params[:goal][:food_habits_more_names]
      elsif !params[:goal][:food_habits_less_names] then
        #current_user.goal.food_habit_ids = params[:goal][:food_habits_less_names]
        @goal.food_habit_ids = params[:goal][:food_habits_less_names]
      end
    end

end
