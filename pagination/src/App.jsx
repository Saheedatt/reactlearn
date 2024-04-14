import React, { useEffect, useState } from "react";

function App() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [news, setNews] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const newsItems = [
      {
        id: "1",
        title: "Nigeria today",
        description:
          "The inflation rate in Nigeria has increased to 18.17% in March 2021 from 51.33% in February 2024.",
        url: "https://www.nigeria.com",
      },
      {
        id: "2",
        title: "In sports world...",
        description:
          "Mercedes reportedly green-light huge Max Verstappen deal that eclipses Lewis Hamilton salary",
        url: "https://www.planetf1.com/news/mercedes-approve-max-verstappen-deal-bigger-lewis-hamilton-salary",
      },
      {
        title: "Google News",
        url: "https://news.google.com/",
        description: "Latest news from around the world",
      },
      {
        title: "TechCrunch",
        url: "https://techcrunch.com",
        description: "Latest tech news from tech crunch.",
      },
      {
        title: "Tech Cabal",
        url: "https://techcabal.com",
        description: "Latest tech news from tech cabal.",
      },
    ];
    const item = newsItems[currentPosition];
    // console.log(item)
    setListItems(newsItems);
    //set our state
    setNews(item);
    setLoading(false);
  }, [currentPosition]);

  const handleNext = (event) => {
    event.preventDefault();

    const length = listItems.length;
    const count = length - 1;
    //setCurrentPosition((prevItem) => prevItem + 1);
    if (currentPosition < count - 1) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    //setcurrentPosition((prevItem) => prevItem - 1);
    if (currentPosition > 0) {
      setCurrentPosition((prev) => prev - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <>
      <section className="main">
        <section className="news">
          {loading ? (
            <div>loading...</div>
          ) : (
            <div className="news-item">
              <h2>{news.title}</h2>
              <p>{news.description}</p>
              <a href={news.url}>{news.url}</a>
            </div>
          )}
        </section>
        <div className="paginate">
          <button className="prev" onClick={handlePrev}>
            Prev
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </section>
    </>
  );
}

{
  /* Pagination is a feature through which users can easily switch between pages or views across an app*/
}
{
  /*Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly loading and rendering the non-critical items later. The fallback prop accepts any React elements that you want to render while waiting for the component to load
  import React, { Suspense } from "react";
  const Other = React.lazy(() => import("./Other"));

  function MyComponent() {
    return(
      <div>
      <Suspense fallback = {<div>Loading...</div>}>
      <Other />
      </Suspense>
      </div>
    );
  */
}
{
  /*Architecture Patterns:
  - Always have a starting point in your React application. It comprises various folders such as assets, components.
  - Group shared components in one folder
  - Avoid creating a single context for everything
  - Tap into ES6 modules to import and export components in react from their root folders
  - You can use arrow functions when writing your functional components.
  */
}
{
  /*Error boundaries are react components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. It is rarely used */
}
export default App;
