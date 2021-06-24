import List from "../../elements/List";
import { NewsArticles } from "../../types";
import NewsListItem from "./NewsListItem";
import NewsTeaserItem from "./NewsTeaserItem";

export type NewsContainerProps = { articles: NewsArticles };
function NewsContainer({ articles }: NewsContainerProps) {
  const newestArticle = articles[0];
  const slicedArticles = articles.slice(1, 4);

  return (
    <>
      {articles.length === 0 && (
        <div>Sorry, but there is nothing we can talk about.</div>
      )}
      {articles.length > 0 && (
        <List>
          <NewsTeaserItem article={newestArticle} />
          {slicedArticles.map((article, index) => (
            <NewsListItem key={index} article={article} />
          ))}
        </List>
      )}
    </>
  );
}

export default NewsContainer;
