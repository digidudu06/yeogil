CREATE TABLE CONTINENT
(
    `CONTINENT_SEQ`    INT            NOT NULL    AUTO_INCREMENT, 
    `CONTINENET_NAME`  VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (CONTINENT_SEQ)
);

CREATE TABLE COUNTRY
(
    `COUNTRY_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `COUNTRY_NAME`  VARCHAR(50)    NOT NULL, 
    `COUNTRY_ENAME`  VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (COUNTRY_SEQ)
);

CREATE TABLE CITY
(
    `CITY_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `CITY_NAME`  VARCHAR(30)    NOT NULL, 
    `CITY_ENAME`  VARCHAR(30)    NOT NULL,
    PRIMARY KEY (CITY_SEQ)
);


CREATE TABLE RESTAURANT
(
    `REST_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `REST_NAME`  VARCHAR(45)    NOT NULL, 
    PRIMARY KEY (REST_SEQ)
);

CREATE TABLE SHOPPING
(
    `STORE_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `POSITION`    VARCHAR(50)    NOT NULL, 
    `STORE_NAME`  VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (STORE_SEQ)
);

CREATE TABLE ATTRACTION
(
    `ATTR_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `ATTR_NAME`  VARCHAR(45)    NOT NULL, 
    PRIMARY KEY (ATTR_SEQ)
);

ALTER TABLE `ATTRACTION`
	ADD COLUMN `ATTR_DNAME` VARCHAR(150) NOT NULL AFTER `ATTR_NAME`,
	ADD COLUMN `ATTR_ENAME` VARCHAR(50) NOT NULL AFTER `ATTR_DNAME`,
	ADD COLUMN `ATTR_LAT` VARCHAR(50) NOT NULL AFTER `ATTR_ENAME`,
	ADD COLUMN `ATTR_LNG` VARCHAR(50) NOT NULL AFTER `ATTR_LAT`,
	ADD COLUMN `CITY_ENAME` VARCHAR(50) NOT NULL AFTER `ATTR_LNG`;

CREATE TABLE CATEGORY
(
    `CATEGORY_NAME`  VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (CATEGORY_NAME)
);

CREATE TABLE IMAGE
(
    `IMG_NAME`  VARCHAR(50)     NOT NULL, 
    `IMG_URL`   VARCHAR(150)    NOT NULL, 
    PRIMARY KEY (IMG_NAME)
);

CREATE TABLE AIRPORT
(
    `ARIPORT_NAME`  VARCHAR(50)    NOT NULL, 
    `FLIGHT_NAME`   VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (ARIPORT_NAME)
);

CREATE TABLE AIRPORT_PAYMENT
(
    `AIRPORT_NAME`      VARCHAR(50)    NOT NULL, 
    `DEPARTURE_TIME`    VARCHAR(50)    NOT NULL, 
    `ARRIVAL_TIME`      VARCHAR(50)    NOT NULL, 
    `DEPART_AIRPORT`    VARCHAR(50)    NOT NULL, 
    `ARRIVAL_AIRPORT`   VARCHAR(50)    NOT NULL, 
    `PRICE`  			VARCHAR(50)    NOT NULL, 
    `MEMBER_SEQ`  		VARCHAR(50)    NOT NULL, 
    `DEPART_DATE`       VARCHAR(50)    NOT NULL, 
    `ARRIVLA_DATE`      VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (ARRIVAL_TIME, DEPARTURE_TIME)
);



CREATE TABLE MEMBER
(
    `MEMBER_SEQ`   INT            NOT NULL    AUTO_INCREMENT, 
    `MEMBER_NAME`  VARCHAR(45)    NOT NULL, 
    `EMAIL`        VARCHAR(45)    NOT NULL, 
    `PASSWORD`     VARCHAR(45)    NOT NULL, 
    PRIMARY KEY (MEMBER_SEQ)
);

CREATE TABLE ARTICLE
(
    `ARTICLE_SEQ`  INT             NOT NULL    AUTO_INCREMENT, 
    `TITLE`        VARCHAR(100)    NOT NULL, 
    `CONTENT`      VARCHAR(500)    NOT NULL, 
    PRIMARY KEY (ARTICLE_SEQ)
);


CREATE TABLE SCHEDULE
(
    `SCHE_SEQ`  INT            NOT NULL    AUTO_INCREMENT,
    PRIMARY KEY (SCHE_SEQ)
);


-- 호텔


CREATE TABLE HOTEL
(
    `HOTEL_SEQ`   INT             NOT NULL    AUTO_INCREMENT, 
    `HOTEL_NAME`  VARCHAR(50)     NOT NULL, 
    `HOTEL_TEL`   VARCHAR(50)     NULL, 
    `HOTEL_ADDR`  VARCHAR(300)    NOT NULL, 
    PRIMARY KEY (HOTEL_SEQ)
);

CREATE TABLE HOTEL_ROOM
(
    `ROOM_NUM`    VARCHAR(30)    NOT NULL, 
    `START_DATE`  VARCHAR(50)    NOT NULL, 
    `END_DATE`    VARCHAR(50)    NOT NULL, 
    `ROOM_TYPE`   VARCHAR(50)    NOT NULL, 
    PRIMARY KEY (ROOM_NUM, START_DATE, END_DATE)
);

CREATE TABLE HOTEL_PAYMENT
(
    `PAYMENT_DATE`  DATE           NOT NULL, 
    `PRICE`         INT            NOT NULL, 
    `PAYMENT_CODE`  VARCHAR(50)    NULL, 
    PRIMARY KEY (PAYMENT_DATE)
);




-- 날씨 INSERT
INSERT INTO yeogil.IMAGE(IMG_NAME,IMG_URL) VALUES('w_cloud','https://bit.ly/2XFXSQ2');
INSERT INTO yeogil.IMAGE(IMG_NAME,IMG_URL) VALUES('w_sunny','https://bit.ly/2Zuek84');
INSERT INTO yeogil.IMAGE(IMG_NAME,IMG_URL) VALUES('w_rain','https://bit.ly/2UVbYjV');
INSERT INTO yeogil.IMAGE(IMG_NAME,IMG_URL) VALUES('w_snow','https://bit.ly/2ISRmBq');
INSERT INTO yeogil.IMAGE(IMG_NAME,IMG_URL) VALUES('w_cloundy','https://bit.ly/2UAwvVR');

-- 대륙 INSERT
INSERT INTO yeogil.CONTINENT(CONTINENET_NAME) VALUES('유럽');
INSERT INTO yeogil.CONTINENT(CONTINENET_NAME) VALUES('아시아');

-- 나라 INSERT
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('마카오','Macau');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('인도네시아','Indonesia');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('몰디브','Maldives');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('라오스','Laos');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('대만','Taiwan');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('베트남','Vietnam');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('스리랑카','Sri Lanka');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('싱가포르','Singapore');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('미얀마','Myanmar');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('인도','India');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('태국','Thailand');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('일본','Japan');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('중국','China');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('필리핀','Philippines');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('홍콩','Hongkong');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('독일','Germany');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('영국','United Kingdom');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('러시아','Russia');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('폴란드','Poland');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('덴마크','Denmark');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('모나코','Monaco');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('벨기에','Belgium');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('루마니아','Romania');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('불가리아','Bulgaria');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('스웨덴','Sweden');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('스위스','Switzerland');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('스페인','Spain');
INSERT INTO yeogil.COUNTRY(COUNTRY_NAME,COUNTRY_ENAME) VALUES('핀란드','Finland');

-- 도시 INSERT

INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('타이베이','Taipei');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('타이난','Tainan');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('이란','Yilan');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('타이중','Taitung');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('가오슝','Kaohsiung');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('신베이','New Taipei City');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('화롄','Hualien');
INSERT INTO yeogil.CITY(CITY_NAME,CITY_ENAME) VALUES('타이둥','Taitung');

UPDATE `yeogil`.`CITY` SET `CITY_LAT`='23.69781 ', `CITY_LNG`='120.960515' WHERE  `CITY_SEQ`=1;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=1;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='120.2268758', `CITY_LNG`='22.9998999' WHERE  `CITY_SEQ`=2;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=2;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='121.7377502', `CITY_LNG`='24.7021073' WHERE  `CITY_SEQ`=3;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=3;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='120.6003376', `CITY_LNG`='24.2554817' WHERE  `CITY_SEQ`=4;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=4;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='120.3014353' WHERE  `CITY_SEQ`=5;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=5;
UPDATE `yeogil`.`CITY` SET `CITY_LNG`='22.6272784' WHERE  `CITY_SEQ`=5;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=5;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='121.4627868', `CITY_LNG`='25.0169826' WHERE  `CITY_SEQ`=6;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=6;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='23.977' WHERE  `CITY_SEQ`=7;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=7;
UPDATE `yeogil`.`CITY` SET `CITY_LNG`='121.604' WHERE  `CITY_SEQ`=7;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=7;
UPDATE `yeogil`.`CITY` SET `CITY_LAT`='121.0713702', `CITY_LNG`='22.7972447' WHERE  `CITY_SEQ`=8;
SELECT `CITY_SEQ`, `CITY_NAME`, `CITY_ENAME`, `CITY_LAT`, `CITY_LNG` FROM `yeogil`.`CITY` WHERE  `CITY_SEQ`=8;


