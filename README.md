#Later.js 
* laterjs 1.1.9 exported to client and server.
* Timezone parsing support on server-side using https://www.npmjs.com/package/timezone

#Usage

````
var schedule = later.parse.recur().on('11:00', '13:00').time().onWeekday();

later.date.UTC();
later.schedule(schedule).next(10);

later.date.localTime();
later.schedule(schedule).next(10);

later.date.timezone("Europe/Amsterdam");
later.schedule(schedule).next(10);

later.date.timezone("America/Los_Angeles");
later.schedule(schedule).next(10);
````

#Example
* Server time is UTC
````
UTC:
[ Thu Sep 10 2015 11:00:00 GMT+0000 (UTC),
  Thu Sep 10 2015 13:00:00 GMT+0000 (UTC),
  Fri Sep 11 2015 11:00:00 GMT+0000 (UTC),
  Fri Sep 11 2015 13:00:00 GMT+0000 (UTC),
  Mon Sep 14 2015 11:00:00 GMT+0000 (UTC) ]
Local:
[ Thu Sep 10 2015 11:00:00 GMT+0000 (UTC),
  Thu Sep 10 2015 13:00:00 GMT+0000 (UTC),
  Fri Sep 11 2015 11:00:00 GMT+0000 (UTC),
  Fri Sep 11 2015 13:00:00 GMT+0000 (UTC),
  Mon Sep 14 2015 11:00:00 GMT+0000 (UTC) ]
Amsterdam:
 [ Thu Sep 10 2015 11:00:00 GMT+0000 (UTC),
   Fri Sep 11 2015 09:00:00 GMT+0000 (UTC),
   Fri Sep 11 2015 11:00:00 GMT+0000 (UTC),
   Mon Sep 14 2015 09:00:00 GMT+0000 (UTC),
   Mon Sep 14 2015 11:00:00 GMT+0000 (UTC) ]
Los Angeles:
 [ Thu Sep 10 2015 18:00:00 GMT+0000 (UTC),
   Thu Sep 10 2015 20:00:00 GMT+0000 (UTC),
   Fri Sep 11 2015 18:00:00 GMT+0000 (UTC),
   Fri Sep 11 2015 20:00:00 GMT+0000 (UTC),
   Mon Sep 14 2015 18:00:00 GMT+0000 (UTC) ]

````