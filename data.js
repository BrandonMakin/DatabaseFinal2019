let data = {
  bill: {
    getName: function (id) {
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    getSponsors: function (id) {
      return ["Dick Durbin", "Chuck Schumer"];
    },
    getIntroductionDate: function(id)
    {
      return "12/3/2019";
    },
  },
  law: {
    getName: function (id) {
      return "Citizenship for Children of Military Members and Civil Servants Act";
    },
    getSponsors: function (id) {
      return ["Dick Durbin", "Chuck Schumer"];
    },
    getIntroductionDate: function(id)
    {
      return "12/3/2019";
    },
    getVotesFor: function(id)
    {
      return ["Dick Durbin", "Chuck Schumer"];
    },
    getVotesAgainst: function(id)
    {
      return ["Brandon", "Sam"];
    },
  },
  party: {
    getName: function(id)
    {
      return "Democrat";
    },
    getHouseMembers: function(id)
    {
      return ["Dick Durbin", "Sam"];
    },
    getSenateMembers: function(id)
    {
      return ["Chuck Schumer", "Brandon"];
    },
  },
  legislator: {
    getName: function(id)
    {
      return "Dick Durban";
    },
    getHouse: function(id)
    {
      return "Senate";
    },
    getRole: function(id)
    {
      return "Minority Whip";
    },
    getParty: function(id)
    {
      return "Democrat";
    },
    getConstituency: function(id)
    {
      return "Illinois";
    },
    getSponsoredBills: function(id)
    {
      return [
        "H.R. 4803" + ": " + "Citizenship for Children of Military Members and Civil Servants Act",
        "H.R. 4803" + ": " + "Citizenship for Children of Military Members and Civil Servants Act"
      ]
    },
    getVotes: function(id)
    {
      return [
        ["H.R. 4803" + ": " + "Citizenship for Children of Military Members and Civil Servants Act", 0],
        ["H.R. 4803" + ": " + "Citizenship for Children of Military Members and Civil Servants Act", 1]
      ]
    },
  },
};
