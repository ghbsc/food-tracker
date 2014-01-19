class Meal < ActiveRecord::Base
  belongs_to :log
  
  def eaten_at_time 
    #self.eaten_at.strftime("%l:%M%P")
    eaten_at.strftime("%l:%M%P") if eaten_at 
    #unless eaten_at.nil?
  end 

  def eaten_at_time=(eat_time)
    #self.birthday = "#{month}"  
  end
end
