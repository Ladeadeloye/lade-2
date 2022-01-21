import avatar from '../components/images/avatar.jpg'

const ArticleList = ({articles, title, handleDelete}) => {
    return(
        <div className="content">
            <h1>{title}</h1>
                {articles.map((article)=>(
                <div className="article-preview" key={article.id}>
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <div className="article-body">
                        <h2 className="article-title">{article.title}</h2>
                        <span className="author">{`Article by ${article.author}`}</span>
                        <p>{`A blog of ${article.title}`}</p>
                    </div>
                    <button onClick={()=>{handleDelete(article.id)}} className='deleteButton'>Delete</button>
                </div> 
                ))} 
        </div>
    )
}
export default ArticleList;
