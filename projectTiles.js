var projects = [
{
	"project_name":"Smart Parks(Android)",
	"description":"<b>My first project,</b> an application which manages users authentication and queries Firebase real time database to allow users to book available parking slots in real time.",
	"website":"https://adriel1997.github.io/linkedProjects/smartparks/apppage.html",
	"github":"https://github.com/adriel1997/SmartParks",
	"image":"./images/projectPhotos/smartParksApp.png",	
	"order":"gal_a"
},
{
	"project_name":"Holy Name Church(Android)",
	"description":"An application which lists important prayers, bible links and other important information. Built using sqlite, fragments and xml to maintain light version.",
	"website":"https://github.com/adriel1997/holynamechurch#readme",
	"github":"https://github.com/adriel1997/holynamechurch",
	"image":"./images/projectPhotos/holyNameChurchApp.jpg",	
	"order":"gal_c"
},
{
	"project_name":"Smart Parks(Web)",
	"description":"A website which uses html, css, javascript and uses a real time database from Firebase. It hosts the download link for Smart Parks(Android). It has a feature which shows you the real time status of car parks after user authentication.",
	"website":"https://adriel1997.github.io/linkedProjects/smartparks/home.html",
	"github":"https://github.com/adriel1997/adriel1997.github.io/tree/master/linkedProjects/smartparks",
	"image":"./images/projectPhotos/smartParksWeb.PNG",	
	"order":"gal_a"
},
{
	"project_name":"Third Eye(Android)",
	"description":"Developing an android application with using Google Cloud, DialogFlow and Firebase.",
	"website":null,
	"github":"https://github.com/adriel1997/Major-Project/blob/master/Major%20Project%20Report.pdf",
	"image":"./images/projectPhotos/thirdEyeApp.png",	
	"order":"gal_a"
},
{
	"project_name":"Twitter Analysis(Java)",
	"description":" Twitter based sentiment analysis using JAVA, Flume and Hadoop to analyse whether the tweets posted by people are positive or negative or neutral by checking the tweets with the AFFIN dictionary which contains a score for each word.",
	"website": null,
	"github":"https://github.com/adriel1997/Twitter-Sentiment-Analysis#twitter-sentiment-analysis",
	"image":"./images/projectPhotos/sentimentAnalysis.png",	
	"order":"gal_a"
},
{
	"project_name":"Jolt",
	"description":"Jolt :Industrial project which provides solar chargable scooters to people of Delhi / NCR and college students, to commute to shorter distances at cheap fares. Oversaw the development of 3 android applications. Database integration, administration to user authentication and storage of sensitive documents and scooter finding algorithum were some of the key responsibilities.",
	"website":"https://github.com/adriel1997/Jolt-NCU",
	"github":"https://github.com/adriel1997/Jolt-NCU#2-project-description",
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
		i.className = "fa fas fa-book";
		i.setAttribute('data-toggle','modal');
		i.setAttribute('data-target','#myModal');
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
	document.getElementsByClassName('modal-title')[0].innerHTML = project['project_name'];
	document.getElementsByClassName('modal-description')[0].innerHTML = project['description'];
	document.getElementById('github').href = project['github'];
	document.getElementById('website').href = project['website'];
	document.getElementById('model-image').src = project['image'];
	document.getElementById('myModal').style.display='block';
}
