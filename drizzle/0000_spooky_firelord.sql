CREATE TABLE `consultation_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`business` text,
	`website` text,
	`service` text NOT NULL,
	`message` text NOT NULL,
	`dedupe_hash` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
