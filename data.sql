use legislature;
DELETE FROM States;

INSERT into States values
("1", "Alabama"),
("2", "Alaska"),
("3", "Arizona"),
("4", "Arkansas"),
("5", "California"),
("6", "Colorado"),
("7", "Connecticut"),
("8", "Delaware"),
("9", "Florida"),
("10", "Georgia"),
("11", "Hawaii"),
("12", "Idaho"),
("13", "Illinois"),
("14", "Indiana"),
("15", "Iowa"),
("16", "Kansas"),
("17", "Kentucky"),
("18", "Louisiana"),
("19", "Maine"),
("20", "Maryland"),
("21", "Massachusetts"),
("22", "Michigan"),
("23", "Minnesota"),
("24", "Mississippi"),
("25", "Missouri"),
("26", "Montana"),
("27", "Nebraska"),
("28", "Nevada"),
("29", "New Hampshire"),
("30", "New Jersey"),
("31", "New Mexico"),
("32", "New York"),
("33", "North Carolina"),
("34", "North Dakota"),
("35", "Ohio"),
("36", "Oklahoma"),
("37", "Oregon"),
("38", "Pennsylvania"),
("39", "Rhode Island"),
("40", "South Carolina"),
("41", "South Dakota"),
("42", "Tennessee"),
("43", "Texas"),
("44", "Utah"),
("45", "Vermont"),
("46", "Virginia"),
("47", "Washington"),
("48", "West Virginia"),
("49", "Wisconsin"),
("50", "Wyoming");

DELETE FROM Political_Parties;
INSERT INTO Political_Parties values
(0, "Democrat"),
(1, "Republican");

DELETE FROM Congressional_Houses;
INSERT INTO Congressional_Houses values
(0, "House of Representatives"),
(1, "Senate");

DELETE FROM Bills;
INSERT INTO Bills values
("H.R. 3", "Elijah E. Cummings Lower Drug Costs Now Act", "2019-9-12"),
("H.R. 5213", "NASA Enhanced Use Leasing Extension Act of 2019", "2019-9-12"),
("H.R. 722", "Miracle Mountain Designation Act", "2019-16-12"),
("H.R. 4229", "Broadband Deployment Accuracy and Technological Av", "2019-16-12"),
("H.R. 2726", "Banning Smoking on Amtrak Act of 2019", "2019-16-12"),
("H.R. 4227", "Mapping Accuracy Promotes Services Act", "2019-16-12"),
("H.R. 453", "Eastern Band of Cherokee Historic Lands Reacquisit", "2019-16-12" ),
("S. 216", "Spokane Tribe of Indians of the Spokane Reservatio", "2019-16-12"),
("H.R. 150", "Grant Reporting Efficiency and Agreements Transpar", "2019-16-12"),
("H.R. 5377", "Restoring Tax Fairness for States and Localities A", "2019-16-12"),
("S. 50", "Columbia River In-Lieu and Treaty Fishing Access S", "2019-16-12"),
("H.R. 2647", "SOFFA", "2019-16-12"),
("H.R. 4719", "Funding Instruction for Safety, Health, and Securi", "2019-16-12"),
("H.R. 3530", "Improving Confidence in Veterans’ Care Act", "2019-16-12"),
("H.R. 3172", "Safe Sleep for Babies Act of 2019", "2019-16-12"),
("S. 1790", "National Defense Authorization Act for Fiscal Year", "2019-16-12");

DELETE FROM Laws;
INSERT INTO Laws (law_id, bill_id, law_intro_date, law_sign_date) VALUES
("32", "H.R. 3", "2019-9-12", "2019-9-12"),
("51", "H.R. 5213", "2019-9-12", "2019-9-12"),
("124", "H.R. 722", "2019-16-12", "2019-16-12"),
("123", "H.R. 4229", "2019-16-12", "2019-16-12" ),
("10", "H.R. 2726", "2019-16-12", "2019-16-12");

DELETE FROM Legislators;
INSERT INTO Legislators (leg_id, first_name, middle_name, last_name, first_day, last_day, cong_house_id, party_id, state_id) VALUES
(0, "Dick", "j", "Durban", "2018-10-2", "2019-16-12", 0, 0, "8");
