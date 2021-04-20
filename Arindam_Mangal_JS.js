


     var http = require("http");


     http.createServer(function(request, response)
                       {
                           response.writeHead(200, {'Content-Type':'text/html'});

                           response.end("<body bgcolor='yellow'>"
                                         +"  <br><br><br><br><p style='color:green;text-align:center'><b><u>Rahul Chahar to Shikhar Dhawan, SIX! First six of the"
                                        +"    innings and just what Delhi needed! Loopy ball, on the stumps. Dhawan comes down the track"
                                         +"   and smokes it over the mid-wicket fence. </p>"
                                          +" </body>");

                       }).listen(8081);


         console.log("Server is running at http://127.0.0.1:8081/");
