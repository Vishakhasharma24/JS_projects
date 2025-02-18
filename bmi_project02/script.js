const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = "please provide a valid height";
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerhtml = "please provide a valid weight";
  } else {
    // const bmi = (weight / ((height*height)/10000)).toFixed(2);
    const bmi = (weight / ((height/100)**2)).toFixed(2);
    results.innerHTML = `<span> ${bmi}<spam/>`;

    if(bmi < 18.5){
      results.innerHTML += " - underweight";
    } else if(bmi >= 18.5 && bmi <= 24.9){
      results.innerHTML += " - normal weight";
    } else {
      results.innerHTML += " - overweight";
    
    } 
  }
})