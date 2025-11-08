import css from "./TravellersStories.module.css"
import StoryCard from "../TravellersStoriesItem/TravellersStoriesItem";

interface Props {
  testArray: string[];
}

export default function TravellersStories({ testArray }: Props) {
  return (
    <div className={css.stories}>
      <h2 className={css.title}>Історії Мандрівника</h2>
      <ul className={css.travellerList}>
        {testArray.map((item) => {
          return (
            <li key={item}>
              <StoryCard item={item} />
            </li>
          );
        })}
      </ul>
      <button className={css.showNext}>Показати ще</button>
    </div>
  );
}
