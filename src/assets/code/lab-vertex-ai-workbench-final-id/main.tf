terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 5.0.0"
    }
  }
}

provider "google" {
  project     = var.project_id
  region      = var.region
  credentials = file(var.service_account_key_path)
}

resource "google_project_service" "resource_manager_api" {
  service = "cloudresourcemanager.googleapis.com"
  disable_on_destroy = true
}

resource "google_project_service" "enable_apis" {
  for_each = toset([
    "aiplatform.googleapis.com",
    "datacatalog.googleapis.com",
    "dataproc.googleapis.com"
  ])
  service = each.key
  disable_on_destroy = true

  depends_on = [google_project_service.resource_manager_api]
}

resource "google_workbench_instance" "notebook" {
  name     = "gdg-workbench-demo"
  location = var.zone

  gce_setup {
    machine_type = "n1-standard-1"

    boot_disk {
      disk_type = "PD_STANDARD"
      disk_size_gb = 150
    }

    vm_image {
      project = "cloud-notebooks-managed"
      family  = "workbench-instances"
    }

    disable_public_ip = false
    enable_ip_forwarding = false
  }

  instance_owners = [var.user_email]
}