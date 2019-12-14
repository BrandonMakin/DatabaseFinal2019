let data = {
  bill: {
    getName: function (id) {
      //SELECT bill_name FROM Bills WHERE bill_id = "[id]";
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getSponsors: function (id) {
      //SELECT L.leg_id, L.leg_name FROM Legislators AS L
      //  JOIN Sponsoring AS S ON L.leg_id = S.leg_id
      //  WHERE S.bill_id = "[id]";
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    getIntroductionDate: function(id) {
      //SELECT bill_intro_date FROM Bills WHERE bill_id = "[id]";
      return "12/3/2019";
    },
    getVotesFor: function(id) {
      //SELECT L.leg_id, L.leg_name FROM Legislators AS L
      //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
      //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
      //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    getVotesAgainst: function(id) {
      return [[2, "Brandon"], [3, "Sam"]];
      //SELECT L.leg_id, L.leg_name FROM Legislators AS L
      //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
      //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
      //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "";
    },
    // deletes the bill with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      //DELETE FROM Bills WHERE bill_id = "[id]";
      return true;
    },
  },
  law: {
    getName: function (id) {
      //SELECT law_name FROM Laws WHERE law_id = "[id]";
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getSponsors: function (id) {
      //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
      //  JOIN Sponsoring AS S ON Le.leg_id = S.leg_id
      //  JOIN Laws AS La ON S.bill_id = La.bill_id
      //  WHERE La.law_id = "[id]";
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    getIntroductionDate: function(id) {
      //SELECT law_intro_date FROM Laws WHERE law_id = "[id]";
      return "12/3/2019";
    },
    getSignDate: function(id) {
      //SELECT law_sign_date FROM Laws WHERE law_id = "[id]";
      return "12/10/2019";
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesFor: function(id) {
      //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
      //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
      //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
      //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
      //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
      return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
    },
    // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
    getVotesAgainst: function(id) {
      //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
      //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
      //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
      //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
      //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "NO";
      return [[2, "Brandon"], [3, "Sam"]];
    },
    // deletes the law with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      //DELETE FROM Laws WHERE law_id = "[id]";
      return true;
    },
  },
  party: {
    getName: function(id) {
      //SELECT party_name FROM Political_Parties AS PP WHERE PP.party_id = [id];
      return "Democrat";
    },
    getHouseMembers: function(id) {
      //SELECT L.leg_id, L.leg_name FROM Legislators AS L
      //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
      //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
      //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "HOUSE";
      return [[0, "Dick Durbin"], [3, "Sam"]];
    },
    getSenateMembers: function(id) {
      //SELECT L.leg_id, L.leg_name FROM Legislators AS L
      //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
      //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
      //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "SENATE";
      return [[2, "Brandon"], [1, "Chuck Schumer"]];
    },
    // deletes the party with the given id. Returns whether the deletion was successful.
    delete: function(id) {
      //DELETE FROM Political_Parties WHERE party_id = [id];
      return true;
    },
  },
  legislator: {
  let data = {
    sql: async function (_query) {
      let data = {query: _query}
      console.log(JSON.stringify(data))
      const response = await fetch('http://localhost:1337/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(data)),
      });
      const json = await response.json();
      return json;
    },
    bill: {
      getName: function (id) {
        //SELECT bill_name FROM Bills WHERE bill_id = "[id]";
        return "Citizenship for Children of Military Members and Civil Servants Act";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getSponsors: function (id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Sponsoring AS S ON L.leg_id = S.leg_id
        //  WHERE S.bill_id = "[id]";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getIntroductionDate: function(id) {
        //SELECT bill_intro_date FROM Bills WHERE bill_id = "[id]";
        return "12/3/2019";
      },
      getVotesFor: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getVotesAgainst: function(id) {
        return [[2, "Brandon"], [3, "Sam"]];
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "NO";
      },
      // deletes the bill with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Bills WHERE bill_id = "[id]";
        return true;
      },
    },
    law: {
      getName: function (id) {
        //SELECT law_name FROM Laws WHERE law_id = "[id]";
        return "Citizenship for Children of Military Members and Civil Servants Act";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getSponsors: function (id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Sponsoring AS S ON Le.leg_id = S.leg_id
        //  JOIN Laws AS La ON S.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getIntroductionDate: function(id) {
        //SELECT law_intro_date FROM Laws WHERE law_id = "[id]";
        return "12/3/2019";
      },
      getSignDate: function(id) {
        //SELECT law_sign_date FROM Laws WHERE law_id = "[id]";
        return "12/10/2019";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getVotesFor: function(id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getVotesAgainst: function(id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "NO";
        return [[2, "Brandon"], [3, "Sam"]];
      },
      // deletes the law with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Laws WHERE law_id = "[id]";
        return true;
      },
    },
    party: {
      getName: function(id) {
        //SELECT party_name FROM Political_Parties AS PP WHERE PP.party_id = [id];
        return "Democrat";
      },
      getHouseMembers: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
        //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
        //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "HOUSE";
        return [[0, "Dick Durbin"], [3, "Sam"]];
      },
      getSenateMembers: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
        //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
        //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "SENATE";
        return [[2, "Brandon"], [1, "Chuck Schumer"]];
      },
      // deletes the party with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Political_Parties WHERE party_id = [id];
        return true;
      },
    },
    legislator: {
      //returns [first_name, middle_name, last_name]
      getName: function(id) {
        //SELECT first_name, middle_name, last_name FROM Legislators WHERE leg_id = [id];
        return ["Dick", NULL, "Durban"];
      },
      getHouse: function(id) {
         //SELECT CH.house_name FROM Congressional_Houses AS CH
        //  JOIN Legislators AS L ON CH.house_id = L.cong_house_id
        //  WHERE L.leg_id = [id];
        return "Senate";
      },
      //returns [party_id, party_name]
      getParty: function(id) {
        //SELECT PP.party_id, PP.party_name FROM Political_Parties AS PP
        //  JOIN Legislators AS L ON PP.party_id = L.party_id
        //  WHERE L.leg_id = [id];
        return [0, "Democrat"];
      },
      //returns [state_id, state_name]
      getConstituency: function(id) {
        //SELECT St.state_id, St.state_name FROM States AS St
        //  JOIN Legislators AS L ON St.state_id = L.state_id
        //  WHERE L.leg_id = [id];
        return ["IL", "Illinois"];
      },
      // returns [[bill_0_id, bill_0_name], [bill_1_id, bill_1_name], ...]
      getSponsoredBills: function(id) {
        //SELECT B.bill_id, B.bill_name FROM Bills AS B
        //  JOIN Sponsoring AS S ON S.bill_id = B.bill_id
        //  WHERE S.leg_id = [id];
        return [
          ["H.R. 4803", "Citizenship for Children of Military Members and Civil Servants Act"],
          ["H.R. 4804", "Other Citizenship for Children of Military Members and Civil Servants Act"]
        ]
      },
      // returns [[bill_0_id, bill_0_name, vote_name], [bill_1_id, bill_1_name, vote_name], ...]
      getVotes: function(id) {
  let data = {
    sql: async function (_query) {
      let data = {query: _query}
      console.log(JSON.stringify(data))
      const response = await fetch('http://localhost:1337/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(data)),
      });
      const json = await response.json();
      return json;
    },
    bill: {
      getName: function (id) {
        //SELECT bill_name FROM Bills WHERE bill_id = "[id]";
        return "Citizenship for Children of Military Members and Civil Servants Act";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getSponsors: function (id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Sponsoring AS S ON L.leg_id = S.leg_id
        //  WHERE S.bill_id = "[id]";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getIntroductionDate: function(id) {
        //SELECT bill_intro_date FROM Bills WHERE bill_id = "[id]";
        return "12/3/2019";
      },
      getVotesFor: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getVotesAgainst: function(id) {
        return [[2, "Brandon"], [3, "Sam"]];
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Voting AS Vg ON L.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  WHERE Vg.bill_id = "[id]" AND UPPER(Vs.vote_name) = "NO";
      },
      // deletes the bill with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Bills WHERE bill_id = "[id]";
        return true;
      },
    },
    law: {
      getName: function (id) {
        //SELECT law_name FROM Laws WHERE law_id = "[id]";
        return "Citizenship for Children of Military Members and Civil Servants Act";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getSponsors: function (id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Sponsoring AS S ON Le.leg_id = S.leg_id
        //  JOIN Laws AS La ON S.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      getIntroductionDate: function(id) {
        //SELECT law_intro_date FROM Laws WHERE law_id = "[id]";
        return "12/3/2019";
      },
      getSignDate: function(id) {
        //SELECT law_sign_date FROM Laws WHERE law_id = "[id]";
        return "12/10/2019";
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getVotesFor: function(id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "YES";
        return [[0, "Dick Durbin"], [1, "Chuck Schumer"]];
      },
      // returns [[legislator_0_id, legislator_0_name], [legislator_1_id, legislator_1_name], ...]
      getVotesAgainst: function(id) {
        //SELECT Le.leg_id, Le.leg_name FROM Legislators AS Le
        //  JOIN Voting AS Vg ON Le.leg_id = Vg.leg_id'
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  JOIN Laws AS La ON Vg.bill_id = La.bill_id
        //  WHERE La.law_id = "[id]" AND UPPER(Vs.vote_name) = "NO";
        return [[2, "Brandon"], [3, "Sam"]];
      },
      // deletes the law with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Laws WHERE law_id = "[id]";
        return true;
      },
    },
    party: {
      getName: function(id) {
        //SELECT party_name FROM Political_Parties AS PP WHERE PP.party_id = [id];
        return "Democrat";
      },
      getHouseMembers: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
        //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
        //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "HOUSE";
        return [[0, "Dick Durbin"], [3, "Sam"]];
      },
      getSenateMembers: function(id) {
        //SELECT L.leg_id, L.leg_name FROM Legislators AS L
        //  JOIN Political_Parties AS PP ON PP.party_id = L.party_id
        //  JOIN Congressional_Houses AS CH ON CH.house_id = L.cong_house_id
        //  WHERE PP.party_id = [id] AND UPPER(CH.house_name) = "SENATE";
        return [[2, "Brandon"], [1, "Chuck Schumer"]];
      },
      // deletes the party with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Political_Parties WHERE party_id = [id];
        return true;
      },
    },
    legislator: {
      //returns [first_name, middle_name, last_name]
      getName: function(id) {
        //SELECT first_name, middle_name, last_name FROM Legislators WHERE leg_id = [id];
        return ["Dick", NULL, "Durban"];
      },
      getHouse: function(id) {
         //SELECT CH.house_name FROM Congressional_Houses AS CH
        //  JOIN Legislators AS L ON CH.house_id = L.cong_house_id
        //  WHERE L.leg_id = [id];
        return "Senate";
      },
      //returns [party_id, party_name]
      getParty: function(id) {
        //SELECT PP.party_id, PP.party_name FROM Political_Parties AS PP
        //  JOIN Legislators AS L ON PP.party_id = L.party_id
        //  WHERE L.leg_id = [id];
        return [0, "Democrat"];
      },
      //returns [state_id, state_name]
      getConstituency: function(id) {
        //SELECT St.state_id, St.state_name FROM States AS St
        //  JOIN Legislators AS L ON St.state_id = L.state_id
        //  WHERE L.leg_id = [id];
        return ["IL", "Illinois"];
      },
      // returns [[bill_0_id, bill_0_name], [bill_1_id, bill_1_name], ...]
      getSponsoredBills: function(id) {
        //SELECT B.bill_id, B.bill_name FROM Bills AS B
        //  JOIN Sponsoring AS S ON S.bill_id = B.bill_id
        //  WHERE S.leg_id = [id];
        return [
          ["H.R. 4803", "Citizenship for Children of Military Members and Civil Servants Act"],
          ["H.R. 4804", "Other Citizenship for Children of Military Members and Civil Servants Act"]
        ]
      },
      // returns [[bill_0_id, bill_0_name, vote_name], [bill_1_id, bill_1_name, vote_name], ...]
      getVotes: function(id) {
        //SELECT B.bill_id, B.bill_name, Vs.vote_name FROM Voting AS Vg
        //  JOIN Votes AS Vs ON Vs.vote_id = Vg.vote_id
        //  JOIN Bills AS B ON B.bill_id = Vg.bill_id
        //  WHERE Vg.leg_id = [id];
        return [
          ["H.R. 4803", "Citizenship for Children of Military Members and Civil Servants Act", "No"],
          ["H.R. 4804", "Other Citizenship for Children of Military Members and Civil Servants Act", "Yes"]
        ]
      },
      // returns [[legislator_0_id, l0_first, l0_middle, l0_last], [legislator_1_id, l1_first, l1_middle, l1_last], ...]
      searchByName: function(name) {
        //SELECT leg_id, first_name, middle_name, last_name FROM Legislators
        //  WHERE first_name LIKE "[name]*" OR (middle_name NOT NULL AND middle_name LIKE "[name]*"
        //  OR last_name LIKE "[name]*";
        return [[6, "Larry"], [5, "Mo"], [4, "Curly"]];
      },
      // deletes the legislator with the given id. Returns whether the deletion was successful.
      delete: function(id) {
        //DELETE FROM Legislators WHERE leg_id = [id];
        return true;
      },
    },
  };

    },
  };

  },
};

let sql = {
  //
  // query: function to call sql queries from javascript
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
    return json;
  },
  //
  // isInitialized: boolean that holds whether initializeSQL has been completed
  //
  isInitialized: false,
  //
  // initialize: function for all initial setup to sql.
  //
  initialize: function() {
    if (sql.isInitialized)
      return;

    sql.query("USE legislature");

    isInitialized = true;
  },
}

sql.initialize()
