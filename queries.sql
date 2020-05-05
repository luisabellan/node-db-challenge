BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `task` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`description`	text NOT NULL,
	`notes`	text,
	`completed`	boolean NOT NULL DEFAULT '0'
);
INSERT INTO `task` VALUES (1,'Make skeleton for blog','Ask Virginia for tips',1);
INSERT INTO `task` VALUES (2,'Buy a computer','',0);
INSERT INTO `task` VALUES (3,'Set up a meeting with John Doe','Mr Doe likes donuts!',0);
CREATE TABLE IF NOT EXISTS `resource` (
	`resource_id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	text NOT NULL,
	`description`	text
);
INSERT INTO `resource` VALUES (1,'GitHub Pro Account','Fan Site for smurfs lovers');
INSERT INTO `resource` VALUES (2,'A meeting room','Room for meetings');
INSERT INTO `resource` VALUES (3,'Computer','Computer to make awesome projects');
CREATE TABLE IF NOT EXISTS `project_resource` (
	`project_id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`resource_id`	integer NOT NULL
);
INSERT INTO `project_resource` VALUES (1,2);
INSERT INTO `project_resource` VALUES (2,1);
INSERT INTO `project_resource` VALUES (3,3);
CREATE TABLE IF NOT EXISTS `project-resource` (
	`project_id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`resource_id`	integer NOT NULL
);
CREATE TABLE IF NOT EXISTS `project` (
	`project_id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	text NOT NULL,
	`description`	text,
	`completed`	boolean NOT NULL DEFAULT '0'
);
INSERT INTO `project` VALUES (1,'Smurfs','Fan Site for smurfs lovers',0);
INSERT INTO `project` VALUES (2,'Blog for Good','Virginia React site',0);
INSERT INTO `project` VALUES (3,'ChessNoobsters','Learn to play chess with this awesome app',0);
CREATE TABLE IF NOT EXISTS `knex_migrations_lock` (
	`index`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`is_locked`	integer
);
INSERT INTO `knex_migrations_lock` VALUES (1,0);
CREATE TABLE IF NOT EXISTS `knex_migrations` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	varchar ( 255 ),
	`batch`	integer,
	`migration_time`	datetime
);
INSERT INTO `knex_migrations` VALUES (23,'20200502020732_create-project-table.js',1,1588396596120);
INSERT INTO `knex_migrations` VALUES (24,'20200502023712_create-resources-table.js',1,1588396596123);
INSERT INTO `knex_migrations` VALUES (25,'20200502025939_create-task-table.js',1,1588396596125);
INSERT INTO `knex_migrations` VALUES (26,'20200502031109_create-project-resouce-table.js',1,1588396596126);
CREATE TABLE IF NOT EXISTS `info` (
	`id`	integer NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	text NOT NULL,
	`description`	text,
	`completed`	boolean NOT NULL DEFAULT '0'
);
CREATE UNIQUE INDEX IF NOT EXISTS `task_description_unique` ON `task` (
	`description`
);
CREATE UNIQUE INDEX IF NOT EXISTS `resource_name_unique` ON `resource` (
	`name`
);
CREATE UNIQUE INDEX IF NOT EXISTS `project_name_unique` ON `project` (
	`name`
);
CREATE UNIQUE INDEX IF NOT EXISTS `info_name_unique` ON `info` (
	`name`
);
COMMIT;
