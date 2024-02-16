import  xml2js from 'react-native-xml2js';

//전체 데이터 리스트
export async function apiGetList(){
  try{
    let data;
    const xmlData =await fetch("https://www.heritage.go.kr/heri/gungDetail/gogungListOpenApi.do?gung_number=1").then(res=> res.text());
    
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
//이미지
export async function apiGetImage(){
  try{
    let data;
    const xmlData =await fetch("https://www.cha.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=11&ccbaAsno=00010000&ccbaCtcd=11").then(res=> res.text());
    
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