# covision
Covid hackaton
- For smartphone use React Native
Time-series DB: InfluxDB
Relational DB: Sqlite (for test purposes)
Database structure:
-> table places
- id
- name
- contascore
- latitude_left_bottom
- longitude_left_bottom
- latitude_left_top
- logitude_left_top
- latitude_right_bottom
- longitude_right_bottom
- latitude_right_top
- logitude_right_top
-> table contapoints
- id
- latitude
- longitude
- place_id # to know which place contains these points for easier search
