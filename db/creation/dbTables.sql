
--@block
DESC Prison;

--@block
SHOW TABLES;

-- Siddhesh
SHOW DATABASES;
--@block
CREATE TABLE Education (edq char(20) not NULL, noc int not NULL, nout int not NULL);

--@block
CREATE TABLE Budget (typ char(20) not NULL, amt int not NULL, st char(20) not NULL);

--@block

CREATE TABLE Crime (ctyp char(20) not NULL, aggrp char(10) not NULL, sex char(20) not NULL, year int not NULL);

--@block

CREATE TABLE Rehab (lap char(20) not NULL, fap char(20) not NULL, nopr int not NULL)