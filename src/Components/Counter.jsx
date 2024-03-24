

function Counter({count = 2,children}) {

    let isLoading = true;
    if(isLoading){
        return(
            <h2>Loading ....</h2>
        )
    }

    
  return (
   <>
    <div>This is conter {count}</div>
   </>
  )
}

export default Counter;