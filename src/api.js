import  xml2js from 'react-native-xml2js';

export async function apiGetImage(){
  try{
    let data;
    const xmlData =await fetch("https://www.cha.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=11&ccbaAsno=00030000&ccbaCtcd=11").then(res=> res.text());
    
    xml2js.parseString(xmlData,(err,result)=>{
      if(err!==null){
        console.log(err);
        return
      }
      data=result
    })
    return data;
  }catch(error){
   console.log(error);
  }
}