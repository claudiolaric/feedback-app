

function Header({text}) {
  return (
    <header>
       <div className='container'>
        <h2>{text}</h2>
        </div> 
    </header>
  )
}

Header.defaultProps={

  text:'Fedback UI'
}
export default Header