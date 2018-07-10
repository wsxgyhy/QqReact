import React from 'react'
class App extends React.Component{
  render(){
    const boss = '李云龙'
    return (
        <div>
        <h1>独立团团长  {boss}</h1>
        <h2>啦啦啦</h2>
        <Oney></Oney>
        </div>
          )
  }
}

class Oney extends React.Component{
  render(){
    const boss ='张表表'
    return <h2>一营营长，叫{boss} </h2>
        

  }
}
export default App