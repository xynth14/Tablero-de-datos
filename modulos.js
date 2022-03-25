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


}