 Feature: I am going to validate Calculator webSite
@calculatortesting
Scenario Outline: Scenario Outline name: Add Functionality Testing

Given  Navigate to Calculator webSite
When I Add two Numbers "<key>" And "<key2>"
Then Output Display Shuold Be "<key3>"




Examples:
| key | key2 | key3 |
| 4 | 4  | 8 |
| 4 | 5  | 9 |
| 4 | 56 | 60 |
| 4 | 3  | 7 |
| 4 | 8  | 12 |
| 5 | 5  | 9 |