# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140115050914) do

  create_table "food_feats", force: true do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "food_feats_logs", id: false, force: true do |t|
    t.integer "food_feat_id", null: false
    t.integer "log_id",       null: false
  end

  create_table "food_habits", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "amount"
  end

  create_table "food_habits_goals", id: false, force: true do |t|
    t.integer "goal_id"
    t.integer "food_habit_id"
  end

  create_table "goals", force: true do |t|
    t.string   "main"
    t.string   "preferred_units"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "logs", force: true do |t|
    t.integer  "user_id"
    t.datetime "logged_date"
    t.string   "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "logs_tags", id: false, force: true do |t|
    t.integer "log_id", null: false
    t.integer "tag_id", null: false
  end

  add_index "logs_tags", ["log_id", "tag_id"], name: "index_logs_tags_on_log_id_and_tag_id", using: :btree
  add_index "logs_tags", ["tag_id", "log_id"], name: "index_logs_tags_on_tag_id_and_log_id", using: :btree

  create_table "meals", force: true do |t|
    t.integer  "log_id"
    t.datetime "eaten_at"
    t.string   "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "measurements", force: true do |t|
    t.decimal  "weight"
    t.decimal  "body_fat"
    t.decimal  "body_water"
    t.decimal  "neck"
    t.decimal  "bicep"
    t.decimal  "forearm"
    t.decimal  "chest"
    t.decimal  "waist"
    t.decimal  "hips"
    t.decimal  "thigh"
    t.decimal  "calf"
    t.integer  "log_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "measurements", ["log_id"], name: "index_measurements_on_log_id", using: :btree

  create_table "tags", force: true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "location"
    t.string   "gender"
    t.datetime "birthday"
    t.string   "avatar"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
