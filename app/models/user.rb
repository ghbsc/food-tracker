class User < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
#  attr_accessible :first_name, :last_name, :email, :password, :password_confirmation, 
#                  :remember_me, :location, :gender, :birthday
  #validates :first_name, presence: true

#  GENDERS = ["Female", "Male", "I'd rather not say"]
#  validates_inclusion_of :gender, :in => GENDERS,
#            :message => "{{value}} must be in #{GENDERS.join ','}"

  #validates_presence_of :avatar
  #validates_integrity_of :avatar
  #validates_processing_of :avatar

  #before_save :set_birthday


  def birthday_month

  end 

  def birthday_month=(month)
    #self.birthday = "#{month}"  
  end

  def birthday_day

  end

  def birthday_day=(day)
    #return unless self.birthday_day and (self.birthday.length == 1 or self.birthday.length == 2) 
    #self.birthday.to_s << "-#{day}" 
  end

  def birthday_year
  
  end

  def birthday_year=(year)
    #return unless self.birthday and (self.birthday.length == 3 or self.birthday.length == 4) 
    #self.birthday.to_s << "-#{year}" 
    #self.birthday = self.birthday.to_datetime  
  end

#  def set_birthday
#    self.birthday = "#@birthday_month-#@birthday_day-#@birthday_year".to_date
#  end
end 