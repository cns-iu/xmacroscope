SELECT
  r.ID,
  "None" AS "OpponentName",
  r.START,
  r.END,
  r.PERSONID,
  ROUND((JULIANDAY(r.END) - JULIANDAY(r.START)) * 86400) AS "Time (seconds)",

  p.ID,
  "Unkown" AS "Gender",
  p.AGEGROUP AS "Age Group",
  p.FAVORITEACTIVITY AS "Favorite Activity",
  p.HEIGHT AS "Height",
  p.ZIPCODE,
  p.STATE,

  'Makevention 2019' AS "Event"
FROM RUNS AS r
JOIN PEOPLE AS p ON p.ID = r.PERSONID
ORDER BY ZIPCODE;