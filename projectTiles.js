var projects = [
{
	"project_name":"Smart Parks(Android)",
	"description":"An application which uses Firebase to allow users to book available parking slots in real time.It also provides the user a authentication option and uses Firebase and JSON to perform queries and store data.After booking confirmation a free spot fetched from the database in real - time and updated in the database with the relevant information.",
	"website":"https://adriel1997.github.io/linkedProjects/smartparks/apppage.html",
	"github":"https://github.com/adriel1997/SmartParks",
	"image":"./images/projectPhotos/smartParksWeb.png",	
	"order":"gal_a"
},
{
	"project_name":"Smart Parks(Web)",
	"description":"An online website which uses client side scripting languages like html, css and javascript and uses a real time database from Firebase.It hosts the download link for the android application of the same name.It also has a feature which shows you the real time database of car parks after user authentication which was integrated using Google Sign - in or Email Sign - in",
	"website":"https://adriel1997.github.io/linkedProjects/smartparks/home.html",
	"github":"https://github.com/adriel1997/adriel1997.github.io/tree/master/linkedProjects/smartparks",
	"image":"./images/projectPhotos/smartParksApp.png",	
	"order":"gal_a"
},
{
	"project_name":"Third Eye(Android)",
	"description":"Developing an android application with another developer using Google Cloud, DialogFlow, Tensorflow and Firebase.",
	"website":null,
	"github":"https://github.com/adriel1997/Major-Project/blob/master/Major%20Project%20Report.pdf",
	"image":"./images/projectPhotos/thirdEyeApp.png",	
	"order":"gal_a"
},
{
	"project_name":"Twitter Analysis(Java)",
	"description":" Twitter based sentiment analysis using JAVA and Hadoop.In this project we are doing the sentiment analysis on twitter data to analyse whether the tweets posted by people are positive or negative or neutral by checking the tweets with the AFFIN dictionary which has a set of 2500 words along with the value of each word ranging from - 5 to + 5 denoting whether tweets are positive or negative. ",
	"website": null,
	"github":"https://github.com/adriel1997/Twitter-Sentiment-Analysis#twitter-sentiment-analysis",
	"image":"./images/projectPhotos/sentimentAnalysis.png",	
	"order":"gal_a"
},
{
	"project_name":"Jolt",
	"description":"Jolt :Industrial project which provides solar chargable scooties to people of Delhi / NCR and college students, to commute to shorter distances at cheap fares. Developed an android application with 3 other developers and oversaw the development of the entire application.Was responsible for developing various components ranging from database integration and administration to user authentication and storage of sensitive documents on the server(for earlier versions of application).",
	"website":"https://www.joltindia.com/",
	"github":"https://github.com/adriel1997/jolt",
	"image":"./images/projectPhotos/joltApp.png",	
	"order":"gal_a"
}
];

document.addEventListener('DOMContentLoaded', function() {	
	var projectTiles = document.getElementsByClassName("projectTiles")[0];
	projects.forEach(function(project){
		var containerDiv = document.createElement('div'),
		imgDiv = document.createElement('div'),
		galaryDiv = document.createElement('div'),
		a = document.createElement('a'),
		i = document.createElement('i'),
		img = document.createElement('img');
		
		containerDiv.className = 'col-md-4 col-sm-6 gallery-grid ' + project['order'];
		galaryDiv.className = 'gallery-single fix projectTile';
		img.src = project['image'];
		img.className = "img-fluid testing1";
		imgDiv.className = 'img-overlay ';
		a.className = 'hoverbutton global-radius';
		i.className = "fa fa-picture-o";
		i.onclick = function() {openModelWindow(project['project_name']);};
		
		a.appendChild(i);
		imgDiv.appendChild(a);
		galaryDiv.appendChild(img);
		galaryDiv.appendChild(imgDiv);
		containerDiv.appendChild(galaryDiv);
		projectTiles.appendChild(containerDiv);
	});
}, false);

function openModelWindow(project_name){
	var project  = projects.find(function(project){ return project['project_name'] === project_name; });
	document.getElementById('modal-window-heading').innerHTML = project['project_name'];
	document.getElementById('modal-window-content').innerHTML = project['description'];
	document.getElementById('github').href = project['github'];
	document.getElementById('website').href = project['website'];
	//document.getElementById('model-image').src = project['image'];
	document.getElementById('id01').style.display='block';
}