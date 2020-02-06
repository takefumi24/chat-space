# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# チャットスペースDB設計
## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups, through:  :groups_users

## groups テーブル
|Column|Type|Options|
|------|----|-------|
|groups-name|string|null: false|
|add-member|string|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :messages
- has many: groups_users
- has_many  :users,  through:  :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|body|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :users
- belongs_to :groups
