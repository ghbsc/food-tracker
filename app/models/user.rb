class User < ActiveRecord::Base
  has_secure_password
#  validates_uniqueness_of :email
#  validates_presence_of :password, :on => :create
#  validates_presence_of :email, :on => :create
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i 
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  #validates :password, length: { minimum: 6 }  

  before_create { generate_token(:auth_token) }

  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver
  end 

  mount_uploader :avatar, AvatarUploader
  
  has_one :goal
  has_many :logs
  has_many :tags

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  #devise :database_authenticatable, :registerable,
  #       :recoverable, :rememberable, :trackable, :validatable

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
  
  def self.buddy_requests(current_user)
    where('invited_by = ? and (is_confirmed is null or is_confirmed = false)', current_user.id)
  end

  def self.your_buddies(current_user)
    where('invited_by = ? and is_confirmed = true', current_user.id)
  end

  def full_name 
    [first_name, last_name].join(' ')
  end

  def birthday_month
    birthday.strftime('%-m') unless birthday.nil? 
  end 

  def birthday_month=(month)
    #self.birthday = "#{month}"  
  end

  def birthday_day
    birthday.strftime('%-d') unless birthday.nil?
  end

  def birthday_day=(day)
    #return unless self.birthday_day and (self.birthday.length == 1 or self.birthday.length == 2) 
    #self.birthday.to_s << "-#{day}" 
  end

  def birthday_year
    birthday.strftime('%Y') unless birthday.nil?  
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
