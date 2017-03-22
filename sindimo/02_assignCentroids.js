function run(){

    var means = [{x:100,y:75},{x:175,y:300},{x:500,y:275}];
    assignCentroids(means);

    // draw data
    clearCanvas();
    graphData('black');
    graphMeans(means, 'gray');

    // display means using text
    var pretty = data.reduce(function(previous,current){
        return previous + '{x:' + current.x + ',y:' + current.y + ',centroid:' + current.centroid +  '},<br>';
    },'');
    document.getElementById('means').innerHTML = pretty;
}

// data points for kMeans
var data = [
    {x:150, y:100, centroid:null},
    {x:135, y:65,  centroid:null},
    {x:100, y:50,  centroid:null},
    {x:65,  y:65,  centroid:null},
    {x:50,  y:100, centroid:null},
    {x:65,  y:135, centroid:null},
    {x:100, y:150, centroid:null},
    {x:135, y:135, centroid:null},

    {x:600, y:350, centroid:null},
    {x:571, y:279, centroid:null},
    {x:500, y:250, centroid:null},
    {x:429, y:279, centroid:null},
    {x:400, y:350, centroid:null},
    {x:429, y:421, centroid:null},
    {x:500, y:450, centroid:null},
    {x:571, y:421, centroid:null},

    {x:250, y:350, centroid:null},
    {x:228, y:297, centroid:null},
    {x:175, y:275, centroid:null},
    {x:122, y:297, centroid:null},
    {x:100, y:350, centroid:null},
    {x:122, y:403, centroid:null},
    {x:175, y:425, centroid:null},
    {x:228, y:403, centroid:null}
];


// loop through data points and assign closest centroid
function assignCentroids(means) {

    // -------------------------------
    //      YOUR CODE
    // -------------------------------

   //This function will populate the 'centroid' property for each object in the the 'data' array
   var size_data  = data.length;
   var size_means = means.length;
   
   //Calculate distance between each data point and each centroid

   //For each point
   for (var i=0; i<size_data; i++){

       var distances = [];

       var point = data[i];

       //For each of the k centroids
       for (var j=0; j<size_means; j++){

            dx = point.x - means[j].x;
            dy = point.y - means[j].y;

            var distance = Math.sqrt(dx*dx + dy*dy);
            distances.push(distance);

       }

        data[i].distances = distances;

   }



    //For every data point, find which of the k centriods is closest to it
    for (var i=0; i<size_data; i++){

       var distances = data[i].distances;
       var min_distance = Math.min.apply(null, distances);  //Find minimum distance

       //Get centroid with closest distance
       data[i].centroid = distances.indexOf(min_distance);      

    }


   return data;

}


//sindimo
//run();


var exercise = {};
exercise.assignCentroids = assignCentroids;