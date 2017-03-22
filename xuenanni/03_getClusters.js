function run(){
    var k = 3;
    var means = [{x:100,y:75},{x:175,y:300},{x:500,y:275}];
    clusters = getClusters(k);

    // graph means and clusters
    graphMeans(means, 'gray');
    graphClusters(clusters);


    // display clusters using text
    var html = '';
    clusters.forEach(function(cluster,i){
        html += 'cluster ' + i + ':<br>';
        cluster.forEach(function(point){
            html += '{x:' + point.x +
                    ',y:' + point.y +
                    ',centroid:' + point.centroid +  '},<br>';
        });
    });
    document.getElementById('clusters').innerHTML = html;
}

// the assignCentroids function generates the cluster data
// getClusters simply creates a new array that is easier to graph
function getClusters(k){

    var clusters = [];
    function getCluster(data,counter){
        return data.filter(function(point){
            return point.centroid ===counter;
        });
    }
    for (var i=0;i<k;i++){
        clusters.push(getCluster(data,i));
    }
    return clusters; 
    /*
    // return format:
    [
        [
            {x:150, y:100, centroid:0},
            {x:135, y:65,  centroid:0},
            ...
        ],
        [
            {x:250, y:350, centroid:1},
            {x:228, y:297, centroid:1},
            ...
        ],
        [
            {x:600, y:350, centroid:2},
            {x:571, y:279, centroid:2},
            ...
        ]
    ]

    */
}


// data points for kMeans
var data = [
    {x:150, y:100, centroid:0},
    {x:135, y:65,  centroid:0},
    {x:100, y:50,  centroid:0},
    {x:65,  y:65,  centroid:0},
    {x:50,  y:100, centroid:0},
    {x:65,  y:135, centroid:0},
    {x:100, y:150, centroid:0},
    {x:135, y:135, centroid:0},

    {x:600, y:350, centroid:2},
    {x:571, y:279, centroid:2},
    {x:500, y:250, centroid:2},
    {x:429, y:279, centroid:2},
    {x:400, y:350, centroid:2},
    {x:429, y:421, centroid:2},
    {x:500, y:450, centroid:2},
    {x:571, y:421, centroid:2},

    {x:250, y:350, centroid:1},
    {x:228, y:297, centroid:1},
    {x:175, y:275, centroid:1},
    {x:122, y:297, centroid:1},
    {x:100, y:350, centroid:1},
    {x:122, y:403, centroid:1},
    {x:175, y:425, centroid:1},
    {x:228, y:403, centroid:1}
];

var exercise = {};
exercise.getClusters = getClusters;