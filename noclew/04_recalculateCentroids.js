function run(){
    var k = 3;
    var means = recalculateCentroids(clusters);

    // graph data plus old means
    var oldMeans = [{x:100,y:75},{x:175,y:300},{x:500,y:275}];
    clearCanvas();
    graphClusters(clusters);
    graphMeans(oldMeans, 'gray');

    // graph new means
    graphMeans(means, 'pink', oldMeans);

    // display means using text
    var html = '';
    means.forEach(function(point,i){
        html += '{x:' + point.x +
                ',y:' + point.y +  '},<br>';
    });
    document.getElementById('means').innerHTML = html;
}


// calcute centroids (means) for each cluster
function recalculateCentroids(clusters){

    //  -------------------------
    //      YOUR CODE
    //  -------------------------

    //return format:
    // [{x:1,y:7},{x:10,y:5},{x:4,y:11}];
    var means = [];
    clusters.forEach( function(cluster, i){
        var xSum = 0;
        var ySum = 0;

        cluster.forEach(function(el){
            xSum += el.x;
            ySum += el.y;
        });

        var xCentroid = xSum / cluster.length;
        var yCentroid = ySum / cluster.length;

        means[i] = {x: xCentroid, y:yCentroid};
    });
    return means;

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

var clusters = [
    [
        {x:150, y:100, centroid:0},
        {x:135, y:65,  centroid:0},
        {x:100, y:50,  centroid:0},
        {x:65,  y:65,  centroid:0},
        {x:50,  y:100, centroid:0},
        {x:65,  y:135, centroid:0},
        {x:100, y:150, centroid:0},
        {x:135, y:135, centroid:0},
    ],
    [
        {x:250, y:350, centroid:1},
        {x:228, y:297, centroid:1},
        {x:175, y:275, centroid:1},
        {x:122, y:297, centroid:1},
        {x:100, y:350, centroid:1},
        {x:122, y:403, centroid:1},
        {x:175, y:425, centroid:1},
        {x:228, y:403, centroid:1}
    ],
    [
        {x:600, y:350, centroid:2},
        {x:571, y:279, centroid:2},
        {x:500, y:250, centroid:2},
        {x:429, y:279, centroid:2},
        {x:400, y:350, centroid:2},
        {x:429, y:421, centroid:2},
        {x:500, y:450, centroid:2},
        {x:571, y:421, centroid:2},
    ]
];

var exercise = {};
exercise.recalculateCentroids = recalculateCentroids;