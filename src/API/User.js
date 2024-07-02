/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
   postItem(inputDoctor,inputPatient,inputHealthcare,inputClinic,inputContact,inputSchedule)
*/
const url = 'http://localhost:5000/'
export function login(inputCpf,inputPassword,dataHandler){
  const formData = new FormData();
  formData.append('cpf', inputCpf);
  formData.append('password', inputPassword);
  const endpoint = 'login'
  let finalUrl = url + endpoint;

  var request = fetch(finalUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      if (!response.ok){
        return 
      }
      return response.json()})
    .then((data)=> {
      // Save user id
      // Change page 
      console.log(data)
      dataHandler(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
    });
  return request.response;
};

export function register(inputCpf,inputPassword,dataHandler){
  const formData = new FormData();
  formData.append('cpf', inputCpf);
  formData.append('password', inputPassword);
  const endpoint = 'register'
  let finalUrl = url + endpoint;

  var request = fetch(finalUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      if (!response.ok){
        return 
      }
      return response.json()})
    .then((data)=> {
      // Save user id
      // Change page 
      console.log(data)
      dataHandler(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
    });
  return request.response;
};
