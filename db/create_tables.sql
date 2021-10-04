DROP table if exists "user" cascade;

create table if not exists "user"
(
	"id" serial primary key,
	"name" varchar(255),
	"createdAt" timestamp with time zone not null,
	"updatedAt" timestamp with time zone not null
);