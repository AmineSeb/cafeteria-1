-- Warning: You can generate script only for two tables at a time in your Free plan 
-- 
-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;


-- ************************************** `Customer`

CREATE TABLE `Customer`
(
 `id`       integer NOT NULL ,
 `email`    text NOT NULL ,
 `password` text NOT NULL ,
 `image`    text NOT NULL ,
PRIMARY KEY (`id`)
);




-- ************************************** `menu`

CREATE TABLE `menu`
(
 `id`    integer NOT NULL ,
 `item`  text NOT NULL ,
 `price` float NOT NULL ,
PRIMARY KEY (`id`)
);




-- ************************************** `Order`

CREATE TABLE `Order`
(
 `id`          integer NOT NULL ,
 `id_customer` integer NOT NULL ,
 `id_item`     integer NOT NULL ,
 `number`      integer NOT NULL ,
 `emporte`     tinyint NOT NULL ,
PRIMARY KEY (`id`),
KEY `fkIdx_11` (`id_customer`),
CONSTRAINT `FK_11` FOREIGN KEY `fkIdx_11` (`id_customer`) REFERENCES `Customer` (`id`),
KEY `fkIdx_71` (`id_item`),
CONSTRAINT `FK_71` FOREIGN KEY `fkIdx_71` (`id_item`) REFERENCES `menu` (`id`),
KEY `fkIdx_67` (`id_customer`),
CONSTRAINT `FK_67` FOREIGN KEY `fkIdx_67` (`id_customer`) REFERENCES `Customer` (`id`),
KEY `fkIdx_70` (`id_item`),
CONSTRAINT `FK_70` FOREIGN KEY `fkIdx_70` (`id_item`) REFERENCES `menu` (`id`)
);










