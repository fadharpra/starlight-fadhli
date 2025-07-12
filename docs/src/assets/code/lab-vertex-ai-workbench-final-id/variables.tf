variable "project_id" {}

variable "region" {
  default = "asia-southeast2"
}

variable "zone" {
  default = "asia-southeast2-a"
}

variable "service_account_key_path" {
  default = ".env/service_account_key.json"
}

variable "user_email" {
  description = "Email user yang boleh akses notebook"
}