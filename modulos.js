export async function main(endpoint, titulo){
	let promesa = await fetch(endpoint)
	let data = await promesa.json()
	
	let dataList = data['CodeList']
	let dataJSON = dataList[0]['ValidValue']
	
	let nombresCompletos = ["NY ", "PR ", "VI ", "MA ", "NJ "]

	let lengthDataNY = 0
	let lengthDataPR  = 0
	let lengthDataVI  = 0
	let lengthDataMA  = 0
	let lengthDataNJ  = 0

	dataJSON.map((e) => {		
		if ( e.CountrySubdivision == 'NY ') {
				lengthDataNY++		
		}	
		if ( e.CountrySubdivision == 'PR ') {
				lengthDataPR++		
		}	
		if ( e.CountrySubdivision == 'VI ') {
				lengthDataVI++		
		}	
		if ( e.CountrySubdivision == 'MA ') {
				lengthDataMA++		
		}	
		if ( e.CountrySubdivision == 'NJ ') {
				lengthDataNJ++		
		}		
	})

	console.log(lengthDataPR)
	document.getElementById('nroTrabNY').innerHTML = lengthDataNY
	document.getElementById('nroTrabPR').innerHTML = lengthDataPR
	document.getElementById('nroTrabVI').innerHTML = lengthDataVI
	document.getElementById('nroTrabMA').innerHTML = lengthDataMA	
	document.getElementById('nroTrabNJ').innerHTML = lengthDataNJ


	///CHART JS
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [{
	label: '# of Votes',
	data: [12, 19, 3, 5, 2, 3],
	backgroundColor: [
	'rgba(255, 99, 132, 0.2)',
	'rgba(54, 162, 235, 0.2)',
	'rgba(255, 206, 86, 0.2)',
	'rgba(75, 192, 192, 0.2)',
	'rgba(153, 102, 255, 0.2)',
	'rgba(255, 159, 64, 0.2)'
	],
	borderColor: [
	'rgba(255, 99, 132, 1)',
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)'
	],
	borderWidth: 1
	}]
},
	options: {
	scales: {
	yAxes: [{
	ticks: {
	beginAtZero: true
	}
}]
}
}
});

}