import {useState } from "react";
import ArticleList from "./ArticleList";

const Homepage = ()=>{
    const [articles, setArticles] = useState([
            {id: 1, author: 'Lad', title: 'Lads favorite things', body: 'calma calma'},
            {id: 2, author: 'Beef', title: 'Beefs favorite things', body: 'calma calma'},
            {id: 3, author: 'Chunkz', title: 'Chunkzs favorite things', body: 'calma calma.'},
            {id: 4, author: 'Killer', title: 'Killers favorite things', body: 'calma calma'},
            {id: 5, author: 'Fish', title: 'Fishs favorite things', body: 'calma calma'},
            {id: 6, author: 'Bruhhaha', title: 'Bruhahas favorite things', body: 'calma calma'}
        ])
        const handleDelete = (id) =>{
            const newArticles = articles.filter((article)=>(article.id !== id))
            setArticles(newArticles)
        }
        return(
        <div className="content">
            <ArticleList articles = {articles}title = {"All Articles"} handleDelete={handleDelete}/>
        </div>
            )
}
export default Homepage;