/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
   postItem(inputDoctor,inputPatient,inputHealthcare,inputClinic,inputContact,inputSchedule)
*/
export function login(inputCpf,inputPassword){
  const formData = new FormData();
  formData.append('cpf', inputCpf);
  formData.append('password', inputPassword);
  let url = 'http://127.0.0.1:5000/login';

  var request = fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .then((data)=> {
      // Save user id
      // Change page 
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
    });
  return request.response;
};
