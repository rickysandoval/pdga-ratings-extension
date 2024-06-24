import { Round } from "../vos/round.vo"
const baseRound: Round = {
  roundDate: new Date().getTime(),
  roundNumber: 1,
  roundRating: undefined,
  tournamentName: 'Test Tournament'
}

interface TestData {
  rating: number;
  rounds: Round[];
}

export const ricky: TestData = {
  rating: 960,
  rounds: [
    {
        "tournamentName": "Fall Fling 2023 - Pro/MA50/MA60/MA2",
        "roundNumber": 2,
        "roundDate": new Date("2023-10-21T06:00:00.000Z").getTime(),
        "roundRating": 987
    },
    {
        "tournamentName": "Fall Fling 2023 - Pro/MA50/MA60/MA2",
        "roundNumber": 1,
        "roundDate": new Date("2023-10-21T06:00:00.000Z").getTime(),
        "roundRating": 1000
    },
    {
        "tournamentName": "Mile High Classic 2023 - Pro",
        "roundNumber": 2,
        "roundDate": new Date("2023-10-15T06:00:00.000Z").getTime(),
        "roundRating": 926
    },
    {
        "tournamentName": "Mile High Classic 2023 - Pro",
        "roundNumber": 1,
        "roundDate": new Date("2023-10-15T06:00:00.000Z").getTime(),
        "roundRating": 926
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 3,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 1007
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 2,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 1003
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 1,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 974
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 3,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 924
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 2,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 962
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 1,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 963
    },
    {
        "tournamentName": "MHDGC Presents: Spring Fling 2023 - Pros",
        "roundNumber": 2,
        "roundDate": new Date("2023-05-28T06:00:00.000Z").getTime(),
        "roundRating": 912
    },
    {
        "tournamentName": "MHDGC Presents: Spring Fling 2023 - Pros",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-28T06:00:00.000Z").getTime(),
        "roundRating": 997
    },
    {
        "tournamentName": "6th Annual Big Picture Classic",
        "roundNumber": 2,
        "roundDate": new Date("2023-05-14T06:00:00.000Z").getTime(),
        "roundRating": 929
    },
    {
        "tournamentName": "6th Annual Big Picture Classic",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-14T06:00:00.000Z").getTime(),
        "roundRating": 939
    },
    {
        "tournamentName": "Colorado Disc Golf Hall of Fame Championships - Pro",
        "roundNumber": 2,
        "roundDate": new Date("2023-04-30T06:00:00.000Z").getTime(),
        "roundRating": 1003
    },
    {
        "tournamentName": "Colorado Disc Golf Hall of Fame Championships - Pro",
        "roundNumber": 1,
        "roundDate": new Date("2023-04-30T06:00:00.000Z").getTime(),
        "roundRating": 963
    },
    {
        "tournamentName": "Dragon Flex March",
        "roundNumber": 1,
        "roundDate": new Date("2023-03-11T07:00:00.000Z").getTime(),
        "roundRating": 890
    },
    {
      "tournamentName": "High Plains Challenge Sponsored by Discmania",
      "roundNumber": 1,
      "roundDate": new Date("2022-06-17T06:00:00.000Z").getTime(),
      "roundRating": 980
    },
    {
      "tournamentName": "High Plains Challenge Sponsored by Discmania",
      "roundNumber": 2,
      "roundDate": new Date("2022-06-17T06:00:00.000Z").getTime(),
      "roundRating": 960
    },
    {
      "tournamentName": "High Plains Challenge Sponsored by Discmania",
      "roundNumber": 3,
      "roundDate": new Date("2022-06-17T06:00:00.000Z").getTime(),
      "roundRating": 935
    }
]
}

export const joe: TestData = {
  rating: 1036,
  rounds: [
    {
        "tournamentName": "2024 Steel City Shootout supported by INNOVA ",
        "roundNumber": 2,
        "roundDate": new Date("2024-05-19T06:00:00.000Z").getTime(),
        "roundRating": 1059
    },
    {
        "tournamentName": "2024 Steel City Shootout supported by INNOVA ",
        "roundNumber": 1,
        "roundDate": new Date("2024-05-19T06:00:00.000Z").getTime(),
        "roundRating": 1027
    },
    {
        "tournamentName": "DISCMANIA's 303 Open (DGPT-Q-Series) @ Beaver Ranch DGC",
        "roundNumber": 3,
        "roundDate": new Date("2024-05-11T06:00:00.000Z").getTime(),
        "roundRating": 1073
    },
    {
        "tournamentName": "DISCMANIA's 303 Open (DGPT-Q-Series) @ Beaver Ranch DGC",
        "roundNumber": 2,
        "roundDate": new Date("2024-05-11T06:00:00.000Z").getTime(),
        "roundRating": 1027
    },
    {
        "tournamentName": "DISCMANIA's 303 Open (DGPT-Q-Series) @ Beaver Ranch DGC",
        "roundNumber": 1,
        "roundDate": new Date("2024-05-11T06:00:00.000Z").getTime(),
        "roundRating": 1022
    },
    {
        "tournamentName": "Top Shelf Disc Supply presents The Widefield Pro-Am supported by INNOVA",
        "roundNumber": 2,
        "roundDate": new Date("2024-05-05T06:00:00.000Z").getTime(),
        "roundRating": 1045
    },
    {
        "tournamentName": "Top Shelf Disc Supply presents The Widefield Pro-Am supported by INNOVA",
        "roundNumber": 1,
        "roundDate": new Date("2024-05-05T06:00:00.000Z").getTime(),
        "roundRating": 1024
    },
    {
        "tournamentName": "7th Annual McCook Open",
        "roundNumber": 2,
        "roundDate": new Date("2024-04-07T06:00:00.000Z").getTime(),
        "roundRating": 1024
    },
    {
        "tournamentName": "7th Annual McCook Open",
        "roundNumber": 1,
        "roundDate": new Date("2024-04-07T06:00:00.000Z").getTime(),
        "roundRating": 1030
    },
    {
        "tournamentName": "Disc Revolution Presents Aviary Fools 2024 - Pro & MA1",
        "roundNumber": 2,
        "roundDate": new Date("2024-03-30T06:00:00.000Z").getTime(),
        "roundRating": 1013
    },
    {
        "tournamentName": "Disc Revolution Presents Aviary Fools 2024 - Pro & MA1",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-30T06:00:00.000Z").getTime(),
        "roundRating": 1048
    },
    {
        "tournamentName": "Winter Fling 2024 - Pros/MA50/MA60/MA70/MA2 Sponsored by Trash Panda",
        "roundNumber": 2,
        "roundDate": new Date("2024-03-24T06:00:00.000Z").getTime(),
        "roundRating": 1010
    },
    {
        "tournamentName": "Winter Fling 2024 - Pros/MA50/MA60/MA70/MA2 Sponsored by Trash Panda",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-24T06:00:00.000Z").getTime(),
        "roundRating": 1031
    },
    {
        "tournamentName": "Palisade Awakening 2024 brought to you by Outback Steakhouse",
        "roundNumber": 3,
        "roundDate": new Date("2024-03-10T07:00:00.000Z").getTime(),
        "roundRating": 1027
    },
    {
        "tournamentName": "Palisade Awakening 2024 brought to you by Outback Steakhouse",
        "roundNumber": 2,
        "roundDate": new Date("2024-03-10T07:00:00.000Z").getTime(),
        "roundRating": 1034
    },
    {
        "tournamentName": "Palisade Awakening 2024 brought to you by Outback Steakhouse",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-10T07:00:00.000Z").getTime(),
        "roundRating": 1052
    },
    {
        "tournamentName": "Kwik Discs presents The 3rd Annual King of The Springs supported by INNOVA",
        "roundNumber": 4,
        "roundDate": new Date("2023-11-05T06:00:00.000Z").getTime(),
        "roundRating": 1036
    },
    {
        "tournamentName": "Kwik Discs presents The 3rd Annual King of The Springs supported by INNOVA",
        "roundNumber": 3,
        "roundDate": new Date("2023-11-05T06:00:00.000Z").getTime(),
        "roundRating": 1059
    },
    {
        "tournamentName": "Kwik Discs presents The 3rd Annual King of The Springs supported by INNOVA",
        "roundNumber": 2,
        "roundDate": new Date("2023-11-05T06:00:00.000Z").getTime(),
        "roundRating": 1056
    },
    {
        "tournamentName": "Kwik Discs presents The 3rd Annual King of The Springs supported by INNOVA",
        "roundNumber": 1,
        "roundDate": new Date("2023-11-05T06:00:00.000Z").getTime(),
        "roundRating": 1068
    },
    {
        "tournamentName": "Lunacy XV Pro Weekend",
        "roundNumber": 3,
        "roundDate": new Date("2023-10-15T06:00:00.000Z").getTime(),
        "roundRating": 1057
    },
    {
        "tournamentName": "Lunacy XV Pro Weekend",
        "roundNumber": 2,
        "roundDate": new Date("2023-10-15T06:00:00.000Z").getTime(),
        "roundRating": 1031
    },
    {
        "tournamentName": "Lunacy XV Pro Weekend",
        "roundNumber": 1,
        "roundDate": new Date("2023-10-15T06:00:00.000Z").getTime(),
        "roundRating": 1080
    },
    {
        "tournamentName": "The Harvest 2023 Presented by the Foothill Flyers Disc Golf Club",
        "roundNumber": 3,
        "roundDate": new Date("2023-10-08T06:00:00.000Z").getTime(),
        "roundRating": 1000
    },
    {
        "tournamentName": "The Harvest 2023 Presented by the Foothill Flyers Disc Golf Club",
        "roundNumber": 2,
        "roundDate": new Date("2023-10-08T06:00:00.000Z").getTime(),
        "roundRating": 1006
    },
    {
        "tournamentName": "The Harvest 2023 Presented by the Foothill Flyers Disc Golf Club",
        "roundNumber": 1,
        "roundDate": new Date("2023-10-08T06:00:00.000Z").getTime(),
        "roundRating": 1022
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 3,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 1039
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 2,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 1055
    },
    {
        "tournamentName": "30th Annual Colorado State Disc Golf Championships",
        "roundNumber": 1,
        "roundDate": new Date("2023-09-24T06:00:00.000Z").getTime(),
        "roundRating": 996
    },
    {
        "tournamentName": "Clash at the Creek 2023",
        "roundNumber": 3,
        "roundDate": new Date("2023-09-03T06:00:00.000Z").getTime(),
        "roundRating": 1042
    },
    {
        "tournamentName": "Clash at the Creek 2023",
        "roundNumber": 2,
        "roundDate": new Date("2023-09-03T06:00:00.000Z").getTime(),
        "roundRating": 1001
    },
    {
        "tournamentName": "Clash at the Creek 2023",
        "roundNumber": 1,
        "roundDate": new Date("2023-09-03T06:00:00.000Z").getTime(),
        "roundRating": 1022
    },
    {
        "tournamentName": "High Country Classic Presented by Pioneer Sports",
        "roundNumber": 2,
        "roundDate": new Date("2023-08-27T06:00:00.000Z").getTime(),
        "roundRating": 1003
    },
    {
        "tournamentName": "High Country Classic Presented by Pioneer Sports",
        "roundNumber": 1,
        "roundDate": new Date("2023-08-27T06:00:00.000Z").getTime(),
        "roundRating": 1058
    },
    {
        "tournamentName": "Summer Fling 2023 - Pro/MA50/MA60/MA2",
        "roundNumber": 2,
        "roundDate": new Date("2023-08-12T06:00:00.000Z").getTime(),
        "roundRating": 1073
    },
    {
        "tournamentName": "Summer Fling 2023 - Pro/MA50/MA60/MA2",
        "roundNumber": 1,
        "roundDate": new Date("2023-08-12T06:00:00.000Z").getTime(),
        "roundRating": 1050
    },
    {
        "tournamentName": "6th Annual Dragon DiscDown 3D PRO Day",
        "roundNumber": 2,
        "roundDate": new Date("2023-08-05T06:00:00.000Z").getTime(),
        "roundRating": 1032
    },
    {
        "tournamentName": "6th Annual Dragon DiscDown 3D PRO Day",
        "roundNumber": 1,
        "roundDate": new Date("2023-08-05T06:00:00.000Z").getTime(),
        "roundRating": 1049
    },
    {
        "tournamentName": "2023 PDGA Professional Masters Disc Golf World Championships",
        "roundNumber": 4,
        "roundDate": new Date("2023-07-15T06:00:00.000Z").getTime(),
        "roundRating": 1050
    },
    {
        "tournamentName": "2023 PDGA Professional Masters Disc Golf World Championships",
        "roundNumber": 3,
        "roundDate": new Date("2023-07-15T06:00:00.000Z").getTime(),
        "roundRating": 1031
    },
    {
        "tournamentName": "2023 PDGA Professional Masters Disc Golf World Championships",
        "roundNumber": 2,
        "roundDate": new Date("2023-07-15T06:00:00.000Z").getTime(),
        "roundRating": 1032
    },
    {
        "tournamentName": "2023 PDGA Professional Masters Disc Golf World Championships",
        "roundNumber": 1,
        "roundDate": new Date("2023-07-15T06:00:00.000Z").getTime(),
        "roundRating": 1023
    },
    {
        "tournamentName": "2023 PDGA Professional Masters Disc Golf World Championships",
        "roundNumber": null,
        "roundDate": new Date("2023-07-15T06:00:00.000Z").getTime(),
        "roundRating": 1031
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 3,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 1002
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 2,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 1063
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 1,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 1033
    },
    {
        "tournamentName": "TruBank Des Moines Challenge Presented by Discraft Am & Pro Masters",
        "roundNumber": 3,
        "roundDate": new Date("2023-06-04T06:00:00.000Z").getTime(),
        "roundRating": 1043
    },
    {
        "tournamentName": "TruBank Des Moines Challenge Presented by Discraft Am & Pro Masters",
        "roundNumber": 2,
        "roundDate": new Date("2023-06-04T06:00:00.000Z").getTime(),
        "roundRating": 1054
    },
    {
        "tournamentName": "TruBank Des Moines Challenge Presented by Discraft Am & Pro Masters",
        "roundNumber": 1,
        "roundDate": new Date("2023-06-04T06:00:00.000Z").getTime(),
        "roundRating": 1004
    },
    {
        "tournamentName": "MHDGC Presents: Spring Fling 2023 - Pros",
        "roundNumber": 2,
        "roundDate": new Date("2023-05-28T06:00:00.000Z").getTime(),
        "roundRating": 1007
    },
    {
        "tournamentName": "MHDGC Presents: Spring Fling 2023 - Pros",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-28T06:00:00.000Z").getTime(),
        "roundRating": 1073
    },
    {
        "tournamentName": "How the West Was Won Part 5",
        "roundNumber": 2,
        "roundDate": new Date("2023-05-21T06:00:00.000Z").getTime(),
        "roundRating": 982
    },
    {
        "tournamentName": "How the West Was Won Part 5",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-21T06:00:00.000Z").getTime(),
        "roundRating": 1059
    }
]
}

export const erich: TestData = {
  rating: 903,
  rounds: [
    {
        "tournamentName": "Top of the Pines Bombshell Birdie Bash 2024 +WGE",
        "roundNumber": 1,
        "roundDate": new Date("2024-05-18T06:00:00.000Z").getTime(),
        "roundRating": 934
    },
    {
        "tournamentName": "Top of the Pines Bombshell Birdie Bash 2024 +WGE",
        "roundNumber": 2,
        "roundDate": new Date("2024-05-18T06:00:00.000Z").getTime(),
        "roundRating": 909
    },
    {
        "tournamentName": "Jalisco Open 2024 por Disc Golf Guadalajara",
        "roundNumber": 1,
        "roundDate": new Date("2024-04-28T06:00:00.000Z").getTime(),
        "roundRating": 945
    },
    {
        "tournamentName": "Jalisco Open 2024 por Disc Golf Guadalajara",
        "roundNumber": 2,
        "roundDate": new Date("2024-04-28T06:00:00.000Z").getTime(),
        "roundRating": 889
    },
    {
        "tournamentName": "Jalisco Open 2024 por Disc Golf Guadalajara",
        "roundNumber": 3,
        "roundDate": new Date("2024-04-28T06:00:00.000Z").getTime(),
        "roundRating": 889
    },
    {
        "tournamentName": "Flygreen Series 2024: Rhyolite Flex Thursday - Sponsored by MVP Discs",
        "roundNumber": 1,
        "roundDate": new Date("2024-04-18T06:00:00.000Z").getTime(),
        "roundRating": 875
    },
    {
        "tournamentName": "Flygreen Series 2024: Rhyolite Flex Monday - Sponsored by MVP Discs",
        "roundNumber": 1,
        "roundDate": new Date("2024-04-08T06:00:00.000Z").getTime(),
        "roundRating": 914
    },
    {
        "tournamentName": "Disc Revolution Presents Aviary Fools 2024 - All Other Am Divisions",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-31T06:00:00.000Z").getTime(),
        "roundRating": 863
    },
    {
        "tournamentName": "Disc Revolution Presents Aviary Fools 2024 - All Other Am Divisions",
        "roundNumber": 2,
        "roundDate": new Date("2024-03-31T06:00:00.000Z").getTime(),
        "roundRating": 851
    },
    {
        "tournamentName": "Flygreen Series 2024: Fehringer Flex Monday - Sponsored by MVP Discs",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-11T06:00:00.000Z").getTime(),
        "roundRating": 944
    },
    {
        "tournamentName": "2024 NADGT Exclusive @ Rampart",
        "roundNumber": 1,
        "roundDate": new Date("2024-03-10T07:00:00.000Z").getTime(),
        "roundRating": 950
    },
    {
        "tournamentName": "2024 NADGT Exclusive @ Rampart",
        "roundNumber": 2,
        "roundDate": new Date("2024-03-10T07:00:00.000Z").getTime(),
        "roundRating": 937
    },
    {
        "tournamentName": "2024 MX Disc Golf Championships presented by Dynamic Discs",
        "roundNumber": 1,
        "roundDate": new Date("2024-01-28T07:00:00.000Z").getTime(),
        "roundRating": 907
    },
    {
        "tournamentName": "2024 MX Disc Golf Championships presented by Dynamic Discs",
        "roundNumber": 2,
        "roundDate": new Date("2024-01-28T07:00:00.000Z").getTime(),
        "roundRating": 957
    },
    {
        "tournamentName": "2024 MX Disc Golf Championships presented by Dynamic Discs",
        "roundNumber": 3,
        "roundDate": new Date("2024-01-28T07:00:00.000Z").getTime(),
        "roundRating": 924
    },
    {
        "tournamentName": "2023 NADGT National Championships",
        "roundNumber": 1,
        "roundDate": new Date("2023-11-04T06:00:00.000Z").getTime(),
        "roundRating": 899
    },
    {
        "tournamentName": "2023 NADGT National Championships",
        "roundNumber": 2,
        "roundDate": new Date("2023-11-04T06:00:00.000Z").getTime(),
        "roundRating": 908
    },
    {
        "tournamentName": "2023 NADGT National Championships",
        "roundNumber": 3,
        "roundDate": new Date("2023-11-04T06:00:00.000Z").getTime(),
        "roundRating": 938
    },
    {
        "tournamentName": "2023 NADGT National Championships",
        "roundNumber": 4,
        "roundDate": new Date("2023-11-04T06:00:00.000Z").getTime(),
        "roundRating": 853
    },
    {
        "tournamentName": "Birds with Friends 2023 presented by Discraft",
        "roundNumber": 1,
        "roundDate": new Date("2023-10-01T06:00:00.000Z").getTime(),
        "roundRating": 847
    },
    {
        "tournamentName": "Birds with Friends 2023 presented by Discraft",
        "roundNumber": 2,
        "roundDate": new Date("2023-10-01T06:00:00.000Z").getTime(),
        "roundRating": 930
    },
    {
        "tournamentName": "Flygreen Flex Series Championships 2023",
        "roundNumber": 1,
        "roundDate": new Date("2023-09-17T06:00:00.000Z").getTime(),
        "roundRating": 913
    },
    {
        "tournamentName": "Flygreen Flex Series Championships 2023",
        "roundNumber": 2,
        "roundDate": new Date("2023-09-17T06:00:00.000Z").getTime(),
        "roundRating": 869
    },
    {
        "tournamentName": "Abierto México Cocoyoc 2023 Presentado por Dynamic Discs",
        "roundNumber": 1,
        "roundDate": new Date("2023-08-19T06:00:00.000Z").getTime(),
        "roundRating": 853
    },
    {
        "tournamentName": "Abierto México Cocoyoc 2023 Presentado por Dynamic Discs",
        "roundNumber": 2,
        "roundDate": new Date("2023-08-19T06:00:00.000Z").getTime(),
        "roundRating": 972
    },
    {
        "tournamentName": "Abierto México Cocoyoc 2023 Presentado por Dynamic Discs",
        "roundNumber": 3,
        "roundDate": new Date("2023-08-19T06:00:00.000Z").getTime(),
        "roundRating": 885
    },
    {
        "tournamentName": "Flygreen Flex Series | Round 11: Village Greens | Sponsored by Dynamic Discs",
        "roundNumber": 1,
        "roundDate": new Date("2023-08-07T06:00:00.000Z").getTime(),
        "roundRating": 872
    },
    {
        "tournamentName": "Rocky Mountain State Games Sponsored by Dynamic Discs",
        "roundNumber": 1,
        "roundDate": new Date("2023-07-30T06:00:00.000Z").getTime(),
        "roundRating": 940
    },
    {
        "tournamentName": "Rocky Mountain State Games Sponsored by Dynamic Discs",
        "roundNumber": 2,
        "roundDate": new Date("2023-07-30T06:00:00.000Z").getTime(),
        "roundRating": 913
    },
    {
        "tournamentName": "Rocky Mountain Soda Company Presents: Rocky Mountain Amateur Championships Driven by Discmania",
        "roundNumber": 1,
        "roundDate": new Date("2023-07-23T06:00:00.000Z").getTime(),
        "roundRating": 913
    },
    {
        "tournamentName": "Rocky Mountain Soda Company Presents: Rocky Mountain Amateur Championships Driven by Discmania",
        "roundNumber": 2,
        "roundDate": new Date("2023-07-23T06:00:00.000Z").getTime(),
        "roundRating": 930
    },
    {
        "tournamentName": "Rocky Mountain Soda Company Presents: Rocky Mountain Amateur Championships Driven by Discmania",
        "roundNumber": 3,
        "roundDate": new Date("2023-07-23T06:00:00.000Z").getTime(),
        "roundRating": 851
    },
    {
        "tournamentName": "LPDGC POOL A Session 1",
        "roundNumber": 6,
        "roundDate": new Date("2023-06-28T06:00:00.000Z").getTime(),
        "roundRating": 860
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 1,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 904
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 2,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 851
    },
    {
        "tournamentName": "High Plains Challenge Sponsored by Discmania",
        "roundNumber": 3,
        "roundDate": new Date("2023-06-11T06:00:00.000Z").getTime(),
        "roundRating": 949
    },
    {
        "tournamentName": "2023 NADGT Exclusive @ Frisco",
        "roundNumber": 1,
        "roundDate": new Date("2023-06-04T06:00:00.000Z").getTime(),
        "roundRating": 944
    },
    {
        "tournamentName": "2023 NADGT Exclusive @ Frisco",
        "roundNumber": 2,
        "roundDate": new Date("2023-06-04T06:00:00.000Z").getTime(),
        "roundRating": 889
    },
    {
        "tournamentName": "2023 LPDGC Sunday Funday Series Stop #2",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-28T06:00:00.000Z").getTime(),
        "roundRating": 898
    },
    {
        "tournamentName": "Flygreen Flex Series 2023 | Round 6: Rhyolite Park",
        "roundNumber": 1,
        "roundDate": new Date("2023-05-18T06:00:00.000Z").getTime(),
        "roundRating": 863
    }
]
}
