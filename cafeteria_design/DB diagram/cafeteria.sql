CREATE TABLE `customer`
(
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255) UNIQUE,
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `number` varchar(255)
);

CREATE TABLE `cafeteria`
(
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE,
  `menu_id` integer
);

CREATE TABLE `subscriber`
(
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `cus_id` integer,
  `caf_id` integer,
  `cus_balance` float
);

CREATE TABLE `menu`
(
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `item_id` integer,
  `item_name` varchar(255),
  `price` float
);

CREATE TABLE `orders`
(
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `sub_id` integer,
  `item_id` integer,
  `number` integer,
  `status` varchar(255),
  `order_date` DATE,
  `response_date` DATE
);

ALTER TABLE `subscriber` ADD FOREIGN KEY (`cus_id`) REFERENCES `customer` (`id`);

ALTER TABLE `subscriber` ADD FOREIGN KEY (`caf_id`) REFERENCES `cafeteria` (`id`);

ALTER TABLE `cafeteria` ADD FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`sub_id`) REFERENCES `subscriber` (`id`);
