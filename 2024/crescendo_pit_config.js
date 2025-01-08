var config_data = `
{
  "dataFormat": "tsv", 
  "title": "Scouting PASS 2024",
  "page_title": "Pit Scouting",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number", 
      "code": "t",
      "type": "number"
    },
    { "name": "Width (in)",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length (in)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Height (in)",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
     { "name": " Extended Height (in)",
      "code": "exh",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight (pounds)",
      "code": "mah",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "swerve": "Swerve<br>",
        "west": "Tank<br>",
        "other": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drivetrain Motor",
      "code": "dtm",
      "type": "radio",
      "choices": {
        "neo": "Neo<br>",
        "fal": "Falcon<br>",
        "cim": "CIM<br>",
        "kra": "Kraken<br>",
        "other": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "# of Motors",
      "code": "nob",
      "type": "number"
    },
    { "name": "# of Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Leave in auto",
      "code": "lia",
      "type": "bool"
    },
    { "name": "Number of pieces scored in auto",
      "code": "npa",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Floor pickup Coral",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Station pickup Coral",
      "code": "spu",
      "type": "bool"
    },
     { "name": "Score coral level 1", 
      "code": "scq",
      "type": "bool"
    },
     { "name": "Score coral level 2", 
      "code": "scw",
      "type": "bool"
    },
     { "name": "Score coral level 3", 
      "code": "sce",
      "type": "bool"
    },
     { "name": "Score coral level 4", 
      "code": "scr",
      "type": "bool"
    },
    { "name": "Major Concerns",
      "code": "mc",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
