
--@block
DESC Prison;

--@block
SHOW TABLES;

-- Siddhesh
SHOW DATABASES;
--@block
CREATE TABLE Education (edq char(20) not NULL, noc int not NULL, nout int not NULL);

--@block

CREATE TABLE Budget (typ char(20) not NULL, amt int not NULL,  PrisonState VARCHAR(50) references Prison(PrisonState));

--@block

CREATE TABLE Crime (ctyp char(20) not NULL, agegroup INT NOT NULL references Prison(agegroup)
, sex VARCHAR(50) references Prisoner(sex), dYear int NOT NULL references Prison(dYear)
);

--@block

CREATE TABLE Rehab (lap char(20) not NULL, fap char(20) not NULL, nopr int not NULL)



DROP TABLE Prison;
DROP TABLE Prisoner;


-- STEPHEN
--@block
CREATE TABLE Prison(
    PrisonName varchar(50) primary key,
    dYear INT NOT NULL CHECK (dYear >= 2001),
    PrisonState VARCHAR(50) NOT NULL,
    NoOfPrisoners INT NOT NULL CHECK (NoOfPrisoners >= 0),
    NoOfConvicts INT NOT NULL CHECK (NoOfConvicts >= 0),
    NoofUnderTrial INT NOT NULL CHECK (NoofUnderTrial >= 0)
);
DESCRIBE Prison;
CREATE Table Prisoner(
    agegroup VARCHAR(50) NOT NULL,
    sex VARCHAR(50) NOT NULL,
    nationality VARCHAR(50) NOT NULL,
    religion VARCHAR(50) NOT NULL,
    caste VARCHAR(50) NOT NULL
);

CREATE Table EducationFacilites(
    CourseName VARCHAR(50) PRIMARY KEY, 
    NoOfInmates INT NOT NULL CHECK (NoOfInmates >= 0),
    dYear INT NOT NULL references Prison(dYear)
);

CREATE Table Tranquility(
    typeof VARCHAR(50) NOT NULL,
    inmatesinjured INT NOT NULL CHECK (inmatesinjured >= 0),
    inmateskilled INT NOT NULL CHECK (inmateskilled >= 0),
    dYear INT NOT NULL references Prison(dYear),
    PrisonState VARCHAR(50) references Prison(PrisonState)

);

CREATE TABLE Fatality(
    cause VARCHAR(50) NOT NULL,
    sex VARCHAR(50) references Prisoner(sex),
    dYear INT NOT NULL references Prison(dYear)
);

--@block
DESC Prison;
DESC Prisoner;
DESC EducationFacilites;


--@block
DROP TABLE Prison;
DROP TABLE Prisoner;
DROP TABLE EducationFacilites;
DROP TABLE Tranquility;
DROP TABLE Fatality;