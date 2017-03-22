var expect = require('chai').expect;
var ex1 = require('./ex.js').load('./01_pickRandomMeans.js');
var ex2 = require('./ex.js').load('./02_assignCentroids.js');
var ex3 = require('./ex.js').load('./03_getClusters.js');
var ex4 = require('./ex.js').load('./04_recalculateCentroids.js');

describe('Pick Random Means', function() {
	it('Means value within canvas', function() {
		var k = 3;
		var randomMean = ex1.pickRandomMeans(k);
	    expect(randomMean[0].x).to.be.below(640);
	    expect(randomMean[0].y).to.be.below(480);
	});
});

describe('Assign Centroids', function() {
	it('Centroid assignment matches', function() {
		var means = [{x:100,y:75},{x:175,y:300},{x:500,y:275}];
		var data = ex2.assignCentroids(means);
	    expect(data[0].centroid).to.equal(0);
	});
});

describe('Get Clusters', function() {
	it('Clusters match', function() {
		var k = 3;
	    var clusters = ex3.getClusters(k);
	    expect(clusters[0][0].centroid).to.equal(0);
	    expect(clusters[0][1].centroid).to.equal(0);
	    expect(clusters[0][2].centroid).to.equal(0);
	    expect(clusters[0][3].centroid).to.equal(0);
	    expect(clusters[0][4].centroid).to.equal(0);
	    expect(clusters[0][5].centroid).to.equal(0);
	    expect(clusters[0][6].centroid).to.equal(0);
	    expect(clusters[0][7].centroid).to.equal(0);
	});
});

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


describe('Recalculate Centroids', function() {
	it('Centroid value match', function() {
	    var means = ex4.recalculateCentroids(clusters);
	    expect(means[0].x).to.equal(100);
	    expect(means[0].y).to.equal(100);
	    expect(means[1].x).to.equal(175);
	    expect(means[1].y).to.equal(350);
	    expect(means[2].x).to.equal(500);
	    expect(means[2].y).to.equal(350);

	});
});
