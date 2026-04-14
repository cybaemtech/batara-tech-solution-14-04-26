-- Bata Ra Techno Solutions Contact Form Database Schema
-- Create this database and tables on your server

-- Create Database
CREATE DATABASE IF NOT EXISTS bataratechno_contact;
USE bataratechno_contact;

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    client_type ENUM('b2b', 'd2c') DEFAULT 'b2b',
    message LONGTEXT,
    source_page VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_status ENUM('unread', 'read') DEFAULT 'unread',
    notes LONGTEXT,
    INDEX (created_at),
    INDEX (client_type),
    INDEX (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create database user (run this with admin privileges)
-- CREATE USER 'bataratechno_user'@'localhost' IDENTIFIED BY 'BataraTechno@2025';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON bataratechno_contact.* TO 'bataratechno_user'@'localhost';
-- FLUSH PRIVILEGES;
