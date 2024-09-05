import React, { useEffect, useState } from 'react';
import '../index.css'

export default function ApiData(){

    // const [title, setTitle] = useState([])

    // const fetchData = () => {
    //   fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       setTitle(data)
    //     })
    // }
  
    // useEffect(() => {
    //   fetchData()
    // }, [])
  
    // return (
    //   <div>
    //     {title.length > 0 && (
    //       <ul>
    //         {title.map(title => (
    //           <li key={title.id}>{title.title} имеет userID #{title.userId} и ID{title.id}</li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // )



  const [catalog, setCatalog] = useState([]);
  const urlCatalog = 'https://ekaterinburg.ironplace.ru/catalog/'

  const fetchData = async () => {
    try {
      const response = await fetch("https://app.ironplace.xyz/api/catalog");

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Проверяем структуру данных
      setCatalog(data.catalog); // Извлекаем массив catalog
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCatalogChi = (items) =>
  {return items.map(item =>(
    <div key = {item.id}><a href={urlCatalog+item.slug} className='d2'>{item.name}. </a>
    {item.children && item.children.length > 0 && (
        <div>{renderCatalogChichi(item.children)} </div>
    )}</div>
    
  ))
  }

  const renderCatalogChichi = (items) =>
    {return items.map(item =>(
      <span key = {item.id} className='d3'>{item.name}. </span>
    ))
    }


  const renderCatalogItems = (items, depth = 0) =>
    {
      return items.map(item => (
        <div key={item.id} className='col-6'> 
          <a href={urlCatalog+item.slug}className='d1'>{item.name}</a>
          {item.children && item.children.length > 0 && (
            <div>{renderCatalogChi(item.children)} </div>
          )}
        </div>
      ));
    };

  return (
    <div className=''>
      {catalog.length > 0 ? (
        <ul className='row'>
          {renderCatalogItems(catalog)}
        </ul>
      ) : (
        <p>Загрузка...</p> // Индикация загрузки данных
      )}
    </div>
  );
}

