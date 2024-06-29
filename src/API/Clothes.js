
/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
   postItem(inputDoctor,inputPatient,inputHealthcare,inputClinic,inputContact,inputSchedule)
*/

const url = 'http://127.0.0.1:3003/'
export async function uploadCloth(contextUserId,inputModelName,inputModelBytes){
  const formData = new FormData();
  formData.append('user_id',contextUserId)
  formData.append('model_name', inputModelName);
  formData.append('model_bytes', inputModelBytes);
  const endpoint = 'upload'
  let finalUrl = url + endpoint;

  var request = fetch(finalUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .then((data)=> {
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
    });
  return request.response;
};

export async function getClothes(contextUserId,dataHandler){
  const formData = new FormData();
  formData.append('user_id',1)
  const endpoint = 'clothes'
  let finalUrl = 'http://127.0.0.1:5000/' + endpoint;

  var request = fetch(finalUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      if(!response.ok){
        throw new Error('Network Error')
      }
      return response.json()})
    .then((data)=> {
      data.Roupas.forEach(element => {
        dataHandler(element)
      });
      return data
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
      return null
    });
};


export function getCloth(contextUserId, inputModelName){
  const formData = new FormData();
  formData.append('user_id',1)
  formData.append('model_name',inputModelName)
  console.log(contextUserId,formData.values().next())
  const endpoint = 'clothes'
  let finalUrl = url + endpoint;

  var request = fetch(finalUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .then((data)=> {
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.error(formData)
    });
  return request.response;
};