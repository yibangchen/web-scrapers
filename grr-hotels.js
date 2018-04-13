var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

    url = 'https://aws.passkey.com/event/49222619/owner/3416832/list/hotels/all';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var json = { count : 0, names : [], availability : []};

            $('.modal-open').each(function(){
                console.log('Found it!');
            })

            $('#list-hotel li').each(function(i, elm){
                json.count += 1;
                json.names.push('new_name');
                var data = $(this);

                // title = data.children().first().text();
                // release = data.children().last().children().text();
            });
        }

        fs.writeFile('index.html', html, function(err){
            console.log('Check index.html');
        })

        // fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
        //     console.log('File successfully written! - Check output.json');
        // })
        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send('Check your console!');
    });
})


// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;


