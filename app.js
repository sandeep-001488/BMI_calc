  const form =document.querySelector('form')

  form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
     
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const weightGuide=document.querySelector('#weight-guide')

    if(!height==='' ||height<0 || isNaN(height)){
        result.innerHTML='Please enter value of height'
        result.style.fontSize="20px"
        result.style.marginLeft="80px"
        result.style.fontWeight="700"
   
    }else if(!weight==='' ||weight<0 || isNaN(weight)){
        result.innerHTML='Please enter value of height'
        result.style.fontSize="20px"
        result.style.marginLeft="80px"

    }else{
        const bmi=(weight/((height*height)/10000).toFixed(2))
        result.innerHTML=`<span>${bmi}</span>`
        result.marginLeft=`50px`

        if(bmi<18.6){
            weightGuide.innerText='You are Under Weight'
            weightGuide.style.color='pink'
            weightGuide.style.back='40px'
            weightGuide.style.fontSize='100px'
            weightGuide.style.marginLeft='10px'


            weightGuide.style.fontSize='40px'
        }else if(bmi>=18.6 && bmi<=24.9){
            weightGuide.innerText='Your BMI is normal'
            weightGuide.style.color='green'
            weightGuide.style.fontSize='40px'
            weightGuide.style.back='40px'
            // weightGuide.style.fontSize='100px'
            weightGuide.style.marginLeft='10px'

            
        }else if(bmi>24.9 && bmi<30){
            weightGuide.innerText='You are Over Weight'
            weightGuide.style.color='yellow'
            weightGuide.style.fontSize='40px'



        }
        else {
            weightGuide.innerText='Your BMI  lies in Obese Category'
            weightGuide.style.color='white'
            weightGuide.style.fontSize='20px'
            weightGuide.style.marginLeft="60px"
            weightGuide.style.fontWeight="700"
    }
}
  })