
/*
 * GET users listing.
 */

exports.listall = function(req, res){

  req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM locations',function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('locations_web_all',{page_title:"Locations",data:rows});


         });

    });

};



exports.details = function(req, res){

  req.getConnection(function(err,connection){

        var postcode = req.params.postcode;

        var query = connection.query("SELECT * FROM locations WHERE postcode = ?",[postcode],function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('locations_web_all',{page_title:"Locations",data:rows});


         });

    });

};
