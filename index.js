const schedule = require("node-schedule");



//* Second (optional)
//* Minute
//* Hour
//* Day of Month
//* Month
//* Day of Week



/* EXAMPLE */
// schedule.scheduleJob('* * * * * *', function() {
//     console.log('every second!');
// });
// schedule.scheduleJob('*/5 * * * * *', function() {
//     console.log('every 5second!');
// });



/* EXAMPLE */
// schedule.scheduleJob('* * * * *', function() {
//     console.log('every minute!');
// });
// schedule.scheduleJob('*/5 * * * *', function() {
//     console.log('every 5minute!');
// });



/* EXAMPLE */
// const myJob = schedule.scheduleJob('* * * * * *', function() {
//     console.log("every second will stop after 5second!");
// });
// setTimeout(() => {
//     myJob.cancel();
// }, 5000);



/* EXAMPLE */
// const startTime = new Date(Date.now() + 5000);
// const endTime = new Date(startTime.getTime() + 5000);
// schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function() {
//     console.log("every second will start after 5second and then stop after 5second!");
// });



/* EXAMPLE */
// schedule.scheduleJob('2023-12-29T11:36:00', function() {
//     console.log("on 29-Dec-2023 at 11:36am!");
// });
// schedule.scheduleJob(new Date(2023, 11, 29, 11, 36, 0), function() {
//     console.log("on 29-Dec-2023 at 11:36am!");
// });



/* EXAMPLE */
// schedule.scheduleJob({ hour: 11, minute: 36, dayOfWeek: 5 }, function() {
//     console.log("on Friday at 11:36am!");
// });



/* EXAMPLE */
// const rule = new schedule.RecurrenceRule();
// rule.hour = 16;
// rule.minute = 0;
// rule.tz = 'Asia/Dubai';
// schedule.scheduleJob(rule, function() {
//     console.log("on 11:36am at Dubai timezone!");
// });



/* EXAMPLE */
// schedule.gracefulShutdown();