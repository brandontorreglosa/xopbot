// var cheerio = require("cheerio"); 
// var request = require("request");
// var Discord = require("discord.js");

// module.exports = {
//     name: 'image',
//     permissions: ["SEND_MESSAGES"],
//     description:'Lets users use image cmmand',
// execute(client, message, cmd, args, Discord) {

// client.on("message", function(message) {

// 	var parts = message.content.split(" "); 
// 	if (parts[0] === "image") {

		
// 		image(message, parts);

// 	}

// });

// function image(message, parts) {

	

// 	var search = parts.slice(1).join(" "); 
// 	var options = {
// 	    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
// 	    method: "GET",
// 	    headers: {
// 	        "Accept": "text/html",
// 	        "User-Agent": "Chrome"
// 	    }
// 	};
// 	request(options, function(error, response, responseBody) {
// 		if (error) {
			
// 			return;
// 		}

		

// 		$ = cheerio.load(responseBody); 

		
// 		var links = $(".image a.link");

// 		var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
// 		console.log(urls);
// 		if (!urls.length) {
			
// 			return;
// 		}
//         const embed = new Discord.MessageEmbed()
// 		.setTitle('Good Searching!')
// 		.setImage( urls[~~(Math.random() * urls.length)]  );
// 		message.channel.send(embed)
// 	});

// }
// }
// }