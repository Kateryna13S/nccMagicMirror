/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		// default modules
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			disabled: true
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Naperville",
				locationID: "4903279",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "dbb773b682b737ee9d3a6a279e8bada1"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Naperville",
				locationID: "4903279",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "dbb773b682b737ee9d3a6a279e8bada1"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		// 3rd party modules
		{
			module: "MMM-cryptocurrency",
			position: "top_right",
			config: {
				currency: ['bitcoin', 'ethereum'],
				conversion: 'USD',
				showUSD: true,
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logoWithChanges',
				showGraphs: true,
				coloredLogos: true
			}
		},
		{
			module: 'random_quotes',
			position: 'lower_third',
			config: {
				category: 'motivational'
				// The config property is optional
				// Without a config, a random quote is shown,
				// selected from all of the categories available.
			}
		},
		{
			module: 'twitControl',
			position: 'top_center',
			config: {
				maxNumTweets: 5,
				streamType: 'user',
				api_keys: {
					consumer_key: 'AOq5ETjP2bS8HfAqZua53qHEX',
					consumer_secret: 'WOXOPC2nFjRPcwCcXXXvv2EuUjxx2R2YhVpZEACOtvn74Gydin',
					access_token_key: '470785322-Xh49XBSh4oafLzTPJ3V4YCynCeoTISi1ohFaUNkG',
					access_token_secret: 'u3hk4sUpJxziZEfyzvskVqp3A7S974BkrwZhyJgR2uCVw'
				}
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
