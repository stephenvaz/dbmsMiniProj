--@block
DESC Prison;
--@block
SHOW TABLES;
-- Siddhesh
SHOW DATABASES;
--@block
CREATE TABLE Education(
    edq varchar(50) not NULL,
    noc int not NULL,
    nout int not NULL,
    sex VARCHAR(15) references Prisoner(sex),
    PrisonState VARCHAR(50) NOT NULL references Prison(PrisonState),
    dYear int NOT NULL references Prison(dYear)
);
--@block
CREATE TABLE Budget (
    typ char(30) not NULL,
    amt int not NULL,
    PrisonState VARCHAR(50) references Prison(PrisonState),
    dYear int NOT NULL references Prison(dYear)
);
--@block
CREATE TABLE Crime (
    ctyp varchar(50) not NULL,
    agegroup VARCHAR(15) NOT NULL references Prison(agegroup),
    sex VARCHAR(15) references Prisoner(sex),
    PrisonState VARCHAR(50) NOT NULL references Prison(PrisonState),
    dYear int NOT NULL references Prison(dYear),
    convicted int NOT NULL,
    underTrial int NOT NULL
);
--@block
CREATE TABLE Rehab (
    dYear int NOT NULL references Prison(dYear),
    PrisonState VARCHAR(50) NOT NULL references Prison(PrisonState),
    lap int not null,
    fap int not NULL,
    nopr int not NULL
);






--@block
CREATE TABLE Prison(
    PrisonName varchar(50) primary key,
    dYear INT NOT NULL CHECK (dYear >= 2001),
    PrisonState VARCHAR(50) NOT NULL,
    NoOfPrisoners INT NOT NULL CHECK (NoOfPrisoners >= 0),
    NoOfConvicts INT NOT NULL CHECK (NoOfConvicts >= 0),
    NoOfUnderTrial INT NOT NULL CHECK (NoofUnderTrial >= 0)
);
--@block
CREATE Table Prisoner(
    agegroup VARCHAR(15) NOT NULL,
    sex VARCHAR(15) NOT NULL,
    nationality VARCHAR(50) NOT NULL,
    religion VARCHAR(50) NOT NULL,
    caste VARCHAR(50) NOT NULL
);
--@block
CREATE Table EducationFacilites(
    CourseName VARCHAR(50) PRIMARY KEY,
    NoOfInmates INT NOT NULL CHECK (NoOfInmates >= 0),
    dYear INT NOT NULL references Prison(dYear),
    PrisonState VARCHAR(50) references Prison(PrisonState)
);
--@block
CREATE Table Tranquility(
    typeof VARCHAR(50) NOT NULL,
    inmatesinjured INT NOT NULL CHECK (inmatesinjured >= 0),
    inmateskilled INT NOT NULL CHECK (inmateskilled >= 0),
    dYear INT NOT NULL references Prison(dYear),
    PrisonState VARCHAR(50) references Prison(PrisonState)
); 
--@block
CREATE TABLE Fatality(
    cause VARCHAR(50) NOT NULL,
    sex VARCHAR(15) references Prisoner(sex),
    dYear INT NOT NULL references Prison(dYear),
    PrisonState VARCHAR(50) references Prison(PrisonState),
    noOfDeaths INT NOT NULL CHECK (noOfDeaths >= 0)
);





