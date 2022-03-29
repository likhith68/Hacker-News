import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useSearch from '../useSearch';
import { Link } from "react-router-dom"
import Search from './Search';



function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useSearch(term);

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <div className='Title__text'>
                    <Link to="/">
                        <img className='searchPage__logo'
                            src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/03/hacker-pixabay-1614780001.jpg" />
                    </Link>
                    <h1 className='margin-top'>Hacker News Search</h1>
                </div>
                <div className='searchPage__headerBody'>
                    <Search />
                </div>
            </div>
            {
                term && (
                    <div className='searchPage__results'>
                        <div className='Results__For'>Results for - {term}</div>
                        {data?.hits.map(hits => (
                            <div className='searchPage__result'>
                                <a className='searchPage__resultLink' href={hits.url} target="_blank">
                                    {hits.url}
                                </a>
                                <a className='searchPage__resultTitle' href={hits.url} target="_blank">
                                    <h2>{hits.title}</h2>
                                </a>
                                <span className='searchPage__resultAuthor'>Author - {hits.author}</span>

                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    )
}


export default SearchPage