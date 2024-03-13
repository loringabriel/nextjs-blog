import { useCallback, useEffect, useState } from "react"

export default function Page (){

    const [count, setCount] = useState({})

  const items = [1,2,3,4,5,6]
  const [selectedItem, setSelectedItem] = useState(0)

  const fn = useCallback((e) => {
    console.log('aaaa', e.type)
    setCount({type:e.type, key: e.key, keycode:e.keyCode})
  if(e.key ==='ArrowRight' || e.keyCode === 39){
    setSelectedItem(prev => prev + 1)
  }

  if(e.key ==='ArrowLeft' || e.keyCode === 37){
    setSelectedItem(prev => prev - 1)
  }
},[])

  useEffect(()=>{
  

    window.addEventListener('keydown', fn)

    // return window.removeEventListener('keydown', fn)
  },[fn])
    return (
        <div>

<button onClick={() => {}}>
          count is 
        </button>
        <div style={{display:'flex', gap:'16px'}}>
        {items.map((item, index) => <div style={{backgroundColor:'gray', padding: 24, border: selectedItem === index ? '3px solid red' :''}} key={item}>abc</div>)}
        </div>

{JSON.stringify(count)}
        </div>)
}