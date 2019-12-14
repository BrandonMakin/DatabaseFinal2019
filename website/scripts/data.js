let data = {
  bill: {
    //Inserts a new bill into the relevant tables
    //@param id - the bill's id
    //@param name - the bill's name
    //@param intro_date - the bill's introduction date IN SQL-readable FORMAT
    //@param sponsors - a list of legislators' ids who sponsored the bill
    //                  should be an empty list if no sponsors
    //@param votes - a list of (leg_id, vote_id) lists for all legislators who voted on the bill
    //               should be an empty list if the bill hasn't been voted on the bill
    insert: async function(id, name, intro_date, sponsors, votes) {
      result = sql.query("INSERT INTO Bills (bill_id, bill_name, bill_intro_date) " +
                         "VALUES (\"" + id + "\", \"" + name + "\"," + intro_date + " );"
      );
      for (i = 0; i < sponsors.length; ++i) {
        result = sql.query("INSERT INTO Sponsoring (leg_id, bill_id) " +
                           "VALUES (" + sponsors[i] + ", \"" + id + "\");"
        );
      }
      for (i = 0; i < votes.length; ++i) {
        result = sql.query("INSERT INTO Voting (leg_id, bill_id, vote_id) " +
                           "VALUES (" + votes[i][0] + ", \"" + id + "\", " + votes[i][1] + ");"
        );
      }

      return result;
    },
    getName: async function (id) {
      result = sql.query("SELECT bill_name FROM Bills WHERE bill_id = \""+ id + "\";");
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
<<<<<<< HEAD
    // returns [[legislator_0_id, l0_first, l0_middle, l0_last], [legislator_1_id, l1_first, l1_middle, l1_last], ...]
    getSponsors: function (id) {
      result = sql.query("SELECT L.leg_id, L.first_name, L.middle_name, L.last_name FROM Legislators AS L " +
=======
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getSponsors: async function (id) {
      result = await sql.query("SELECT L.leg_id, L.leg_name FROM Legislators AS L " +
>>>>>>> f3f391b1473c775c9dad1c344ef40c6efe29d6e6
                         "JOIN Sponsoring AS S ON L.leg_id = S.leg_id " +
                         "WHERE S.bill_id = \"" + id + "\";");
      return result;
    },
    getIntroductionDate: async function(id) {
      result = await sql.query("SELECT bill_intro_date FROM Bills WHERE bill_id = \"" + id + "\";");
      return result;
    },
<<<<<<< HEAD
    getVotesFor: function(id) {
      result = sql.query("SELECT L.leg_id, L.first_name, L.middle_name, L.last_name FROM Legislators AS L " +
=======
    getVotesFor: async function(id) {
      result = sql.query("SELECT L.leg_id, L.leg_name FROM Legislators AS L " +
>>>>>>> f3f391b1473c775c9dad1c344ef40c6efe29d6e6
                         "JOIN Voting AS Vg ON L.leg_id = Vg.leg_id " +
                         "JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id " +
                         "WHERE Vg.bill_id = \"" + id + "\" AND UPPER(Vs.vote_name) = \"YES\";");
      return result;
    },
<<<<<<< HEAD
    getVotesAgainst: function(id) {
      result = sql.query("SELECT L.leg_id, L.first_name, L.middle_name, L.last_name FROM Legislators AS L " +
=======
    getVotesAgainst: async function(id) {
      result = sql.query("SELECT L.leg_id, L.leg_name FROM Legislators AS L " +
>>>>>>> f3f391b1473c775c9dad1c344ef40c6efe29d6e6
                         "JOIN Voting AS Vg ON L.leg_id = Vg.leg_id " +
                         "JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id " +
                         "WHERE Vg.bill_id = \"" + id + "\" AND UPPER(Vs.vote_name) = \"NO\";");
      return result;
    },
    // deletes the bill with the given id. Returns whether the deletion was successful.
    delete: async function(id) {
      result = sql.query("DELETE FROM Bills WHERE bill_id = \"[id]\"");
      return true;
    },
  },
  law: {
    //Inserts a new law into the relevant tables
    //@param id - the law's id
    //@param name - the law's name
    //@param intro_date - the law's introduction date IN SQL-readable FORMAT
    //@param sign_date - the law's signing date IN SQL-readable FORMAT
    //@param sponsors - a list of legislators' ids who sponsored the law
    //@param votes - a list of (leg_id, vote_id) lists for all legislators who voted on the law
    insert: async function(id, name, intro_date, sign_date, sponsors, votes) {
      result = sql.query("INSERT INTO Laws (law_id, law_name, law_intro_date, law_sign_date) " +
                         "VALUES (\"" + id + "\", \"" + name + "\", " + intro_date + ", " + sign_date + ");"
      );
      for (i = 0; i < sponsors.length; ++i) {
        result = sql.query("INSERT INTO Sponsoring (leg_id, bill_id) " +
                           "VALUES (" + sponsors[i] + ", \"" + id + "\");"
        );
      }
      for (i = 0; i < votes.length; ++i) {
        result = sql.query("INSERT INTO Voting (leg_id, bill_id, vote_id) " +
                           "VALUES (" + votes[i][0] + ", \"" + id + "\", " + votes[i][1] + ");"
        );
      }

      return result;
    },
    getName: async function (id) {
      result = sql.query("SELECT bill_name FROM Laws AS L JOIN Bills AS B ON B.bill_id = L.bill_id WHERE law_id = \"" + id + "\";");
      return result;
    },
    // returns [[legislator_0_id, l0_first, l0_middle, l0_last], [legislator_1_id, l1_first, l1_middle, l1_last], ...]
    getSponsors: function (id) {
      result = sql.query("SELECT Le.leg_id, Le.first_name, Le.middle_name Le.last_name FROM Legislators AS Le " +
                         "JOIN Sponsoring AS S ON Le.leg_id = S.leg_id " +
                         "JOIN Laws AS La ON S.bill_id = La.bill_id " +
                         "WHERE La.law_id = \"" + id + "\";");
      return result;
    },
    getIntroductionDate: async function(id) {
      result = sql.query("SELECT law_intro_date FROM Laws WHERE law_id = \"" + id + "\";");
      return result;
    },
    getSignDate: async function(id) {
      result = sql.query("SELECT law_sign_date FROM Laws WHERE law_id = \"" + id + "\";");
      return result;
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesFor: async function(id) {
      result = sql.query("SELECT Le.leg_id, Le.first_name, Le.middle_name Le.last_name FROM Legislators AS Le " +
                         "JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id " +
                         "JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id " +
                         "JOIN Laws AS La ON Vg.bill_id = La.bill_id " +
                         "WHERE La.law_id = \"" + id + "\" AND UPPER(Vs.vote_name) = \"YES\";");
      return result;
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesAgainst: async function(id) {
      result = sql.query("SELECT Le.leg_id, Le.first_name, Le.middle_name Le.last_name FROM Legislators AS Le " +
                         "JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id " +
                         "JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id " +
                         "JOIN Laws AS La ON Vg.bill_id = La.bill_id " +
                         "WHERE La.law_id = \"" + id + "\" AND UPPER(Vs.vote_name) = \"NO\";");
      return result;
    },
    // deletes the law with the given id. Returns whether the deletion was successful.
    delete: async function(id) {
      result = sql.query("DELETE FROM Laws WHERE law_id = \"" + id + "\"");
      return result;
    },
  },
  party: {
    //Inserts a new political party into the Political_Parties table
    //@param id - the party's id
    //@param name - the party's name
    insert: async function(id, name) {
      result = sql.query("INSERT INTO Political_Parties (party_id, party_name) " +
                         "VALUES (" + id + ", \"" + name + "\");"
      );
      return result;
    },
    getName: async function(id) {
      result = sql.query("SELECT party_name FROM Political_Parties AS PP WHERE PP.party_id = " + id + ";");
      return result;
    },
<<<<<<< HEAD
    getHouseMembers: function(id) {
      result = sql.query("SELECT L.leg_id, L.first_name, L.middle_name, L.last_name FROM Legislators AS L " +
=======
    getHouseMembers: async function(id) {
      result = sql.query("SELECT L.leg_id, L.leg_name FROM Legislators AS L " +
>>>>>>> f3f391b1473c775c9dad1c344ef40c6efe29d6e6
                         "JOIN Political_Parties AS PP ON PP.party_id = L.party_id " +
                         "JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id " +
                         "WHERE PP.party_id = " + id + " AND UPPER(CH.house_name) = \"HOUSE\";");
      return result;
    },
<<<<<<< HEAD
      getSenateMembers: function(id) {
        result = sql.query("SELECT L.leg_id, L.first_name, L.middle_name, L.last_name FROM Legislators AS L " +
=======
      getSenateMembers: async function(id) {
        result = sql.query("SELECT L.leg_id, L.leg_name FROM Legislators AS L " +
>>>>>>> f3f391b1473c775c9dad1c344ef40c6efe29d6e6
                           "JOIN Political_Parties AS PP ON PP.party_id = L.party_id " +
                           "JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id " +
                           "WHERE PP.party_id = " + id + " AND UPPER(CH.house_name) = \"SENATE\";");
        return result;
      },
      //returns a list of (party_id, party_name) pairs for all parties
      getAll: async function() {
        result = sql.query("SELECT party_id, party_name FROM Political_Parties;")
        return result;
      },
      // deletes the party with the given id. Returns whether the deletion was successful.
      delete: async function(id) {
        result = sql.query("DELETE FROM Political_Parties WHERE party_id = " + id + ";");
        return result;
      },
    },
    legislator: {
      //Inserts a new legislator into the Legislators table
      //@param id - the legislator's id
      //@param first - the legislator's first name
      //@param middle - the legislator's middle name, "NULL" if unknown
      //@param last - the legislator's last name
      //@param house - the legislator's house of Congress id
      //@param party - the legislator's political party id
      //@param first_day - the legislator's first day in office
      //@param last_day - the legislator's last day in office
      //@param state - the legislator's state id
      insert: async function(id, first, middle, last, house, party, first_day, last_day, state) {
        result = sql.query("INSERT INTO Legislators (leg_id, first_name, middle_name, last_name, " +
                           " cong_house_id, first_day, last_day, party_id, state_id) " +
                           "VALUES (" + id + ", \"" + first + "\", \"" + middle + "\", \"" + last + "\", " +
                           house + ", " + first_day + ", " + last_day + ", " + party + ", \"" + state + "\");"
        );
        return result;
      },
      changeFName: async function(name, id) {
        result = sql.query("UPDATE Legislators SET first_name = \"" + name + "\" WHERE leg_id = " + id + ";");
        return result;
      },
      changeMName: async function(name, id) {
        result = sql.query("UPDATE Legislators SET middle_name = \"" + name + "\" WHERE leg_id = " + id + ";");
        return result;
      },
      changeLName: async function(name, id) {
        result = sql.query("UPDATE Legislators SET last_name = \"" + name + "\" WHERE leg_id = " + id + ";");
        return result;
      },
      changeHouse: async function(house_id, leg_id) {
        result = sql.query("UPDATE Legislators SET cong_house_id = " + house_id + " WHERE leg_id = " + id + ";");
        return result;
      },
      changeParty: async function(party_id, leg_id) {
        result = sql.query("UPDATE Legislators SET party_id = " + party_id + " WHERE leg_id = " + id + ";");
        return result;
      },
      changeState: async function(state_id, leg_id) {
        result = sql.query("UPDATE Legislators SET state = \"" + state_id + "\" WHERE leg_id = " + id + ";");
        return result;
      },
      //returns [first_name, middle_name, last_name]
      getName: async function(id) {
        result = sql.query("SELECT first_name, middle_name, last_name FROM Legislators WHERE leg_id = " + id +";");
        return result;
      },
      getHouse: async function(id) {
        result = sql.query("SELECT CH.house_name FROM Congressional_Houses AS CH " +
                           "JOIN Legislators AS L ON CH.house_id = L.cong_house_id " +
                           "WHERE L.leg_id = " + id + ";");
        return result;
      },
      //returns [party_id, party_name]
      getParty: async function(id) {
        result = sql.query("SELECT PP.party_id, PP.party_name FROM Political_Parties AS PP "+
                           "JOIN Legislators AS L ON PP.party_id = L.party_id "+
                           "WHERE L.leg_id = " + id + ";");
        return result;
      },
      //returns [state_id, state_name]
      getConstituency: async function(id) {
        result = sql.query("SELECT St.state_id, St.state_name FROM States AS St " +
                           "JOIN Legislators AS L ON St.state_id = L.state_id " +
                           "WHERE L.leg_id = " + id + ";");
        return result;
      },
      // returns [[bill_0_id, bill_0_name], [bill_1_id, bill_1_name], ...]
      getSponsoredBills: async function(id) {
        result = sql.query("SELECT B.bill_id, B.bill_name FROM Bills AS B "+
                           "JOIN Sponsoring AS S ON S.bill_id = B.bill_id "+
                           "WHERE S.leg_id = " + id +";");
        return result;
      },
      // returns [[bill_0_id, bill_0_name, vote_name], [bill_1_id, bill_1_name, vote_name], ...]
      getVotes: async function(id) {
        result = sql.query("SELECT B.bill_id, B.bill_name, Vs.vote_name FROM Voting AS Vg "+
                           "JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id "+
                           "JOIN Bills AS B ON B.bill_id = Vg.bill_id "+
                           "WHERE Vg.leg_id = " + id + ";");
        return result;
      },
      // returns [[legislator_0_id, l0_first, l0_middle, l0_last], [legislator_1_id, l1_first, l1_middle, l1_last], ...]
      searchByName: async function(name) {
        result = sql.query("SELECT leg_id, first_name, middle_name, last_name FROM Legislators "+
                           "WHERE first_name LIKE \"" + name + "*\" " +
                           "OR (middle_name NOT NULL AND middle_name LIKE \"" + name + "*\" " +
                           "OR last_name LIKE \"" + name + "*\";");
        return result;
      },
      // deletes the legislator with the given id. Returns whether the deletion was successful.
      delete: async function(id) {
        result = sql.query("DELETE FROM Legislators WHERE leg_id = " + id + ";");
        return result;
      },
    },

    house: {
      getId: async function(name) {
        result = sql.query("SELECT house_id FROM Congressional_Houses WHERE UPPER(house_name) = UPPER(\"" + name +"\");");
        return result;
      },
    },

    vote: {
      getId: async function(name) {
        result = sql.query("SELECT vote_id FROM Votes WHERE UPPER(vote_name) = UPPER(\"" + name +"\");");
        return result;
      },
    },

    state: {
      //returns a list of (state_id, state_name) pairs for all states
      getAll: async function() {
        result = await sql.query("SELECT state_id, state_name FROM States;");
        return result;
      }
    }
  };

let sql = {
  //
  // query: async function to call sql queries from javascript
  //
  query: async function (_query) {
    let data = {query: _query}
    console.log(JSON.stringify(data))
    const response = await fetch('http://localhost:8000/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: (JSON.stringify(data)),
    });
    const json = await response.json();
    console.log(json);
    return json.result;
  },
  //
  // isInitialized: boolean that holds whether initializeSQL has been completed
  //
  isInitialized: false,
  //
  // initialize: async function for all initial setup to sql.
  //
  initialize: async function() {
    if (sql.isInitialized)
      return;

    sql.query("USE legislature");

    isInitialized = true;
  },
}

sql.initialize()
