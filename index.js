const fs = require('fs');
const parse = require('node-html-parser').parse;

fs.readFile('build/community.copper.com/index.html', 'utf8', (err,html)=>{
   if(err){
      throw err;
   }

   const root = parse(html);

   const head = root.querySelector('head');
   //body.set_content('<div id = "asdf"></div>');
    
   head.insertAdjacentHTML("beforeend","<link rel='stylesheet' href='main.css' />");

//    console.log(head.toString()); // This you can write back to file!
    fs.writeFile('build/community.copper.com/index.html', root.toString() , function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
    // return root.toString()
 });
 