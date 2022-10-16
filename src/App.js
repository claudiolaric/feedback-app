function App(){
    const title='Blog Post'
    const body='This is my Blog Post'
    const comments=[{id:1,text:'Comment One'},
    {id:2,text:'Comment two'},
    {id:3,text:'Comment three'}

]
const loading=false;
const showComments=false;
if(loading) return "Hello Claudio"
    return ( 
    <div className="container">
    <h1>{title}</h1>
    <p>{body}</p>
    {showComments?'yes':'no'}
    <div className="comments">

        <h3>Comments ({comments.length})</h3>
        <ul>
            {comments.map((comment,index)=>{
                <li key={index}>{comment.text}</li>
            })}
        </ul>
    </div>
    </div>
    )
}
export default App