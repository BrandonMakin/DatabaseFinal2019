CREATE DATABASE legislature;
CREATE USER 'leg';
GRANT ALL PRIVILEGES ON legislature.* TO 'leg';

USE legislature;
CREATE TABLE Bills (
  bill_id VARCHAR(50) PRIMARY KEY,
  bill_name VARCHAR(50) NOT NULL,
  bill_intro_date DATE NOT NULL
);

CREATE TABLE Laws (
  law_id VARCHAR(50) PRIMARY KEY,
  bill_id VARCHAR(50) NOT NULL,
  law_intro_date DATE NOT NULL,
  law_sign_date DATE NOT NULL,
  FOREIGN KEY (bill_id)
    REFERENCES Bills(bill_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);

CREATE TABLE Legislators (
  leg_id INTEGER PRIMARY KEY,
  first_name VARCHAR(20),
  middle_name VARCHAR(20),
  last_name VARCHAR(20),
  first_day DATE,
  last_day DATE,
  cong_house_id INTEGER NOT NULL,
  party_id INTEGER NOT NULL,
  state_id VARCHAR(2) NOT NULL,
  FOREIGN KEY (cong_house_id)
    REFERENCES Congressional_Houses (house_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
  FOREIGN KEY (party_id)
    REFERENCES Political_Parties(party_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
  FOREIGN KEY (state_id)
    REFERENCES States (state_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);

CREATE TABLE Sponsoring (
  leg_id INTEGER NOT NULL,
  bill_id VARCHAR(50) NOT NULL,
  FOREIGN KEY (leg_id)
    REFERENCES Legislators(leg_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
  FOREIGN KEY (bill_id)
    REFERENCES Bills(bill_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);

CREATE TABLE Voting (
  leg_id INTEGER NOT NULL,
  bill_id VARCHAR(50) NOT NULL,
  vote_id INTEGER NOT NULL,
  FOREIGN KEY (leg_id)
    REFERENCES Legislators(leg_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
  FOREIGN KEY (bill_id)
    REFERENCES Bills(bill_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE,
  FOREIGN KEY (vote_id)
    REFERENCES Votes(vote_id)
    ON UPDATE RESTRICT
    ON DELETE CASCADE
);

CREATE TABLE Political_Parties (
  party_id INTEGER PRIMARY KEY,
  party_name VARCHAR(50)
);

CREATE TABLE Congressional_Houses (
  house_id INTEGER PRIMARY KEY,
  house_name VARCHAR(50)
);

CREATE TABLE States (
  state_id VARCHAR(2) PRIMARY KEY,
  state_name VARCHAR(20)
);

CREATE TABLE Votes (
  vote_id INTEGER PRIMARY KEY,
  vote_name VARCHAR(20)
);
