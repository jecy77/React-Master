import Card from "../Card";
import CourseItem from "./CourseItem";
import { Fragment } from "react";

function CourseListCard({ title, items, onFavorite }) {
  // 객체 구조분해할당
  // const [course1, course2, course3] = items; // 배열 구조분해할당

  const lastIndex = items.length - 1;
  return (
    <>
      <Card title={title}>
        <div className="courses">
          {items.map((item, index) => (
            <Fragment key={item.id}>
              <CourseItem {...item} onFavorite={onFavorite} />
              {index !== lastIndex && <hr className="divider" />}
            </Fragment>
          ))}
          {/* <CourseItem {...course1} />      */}
          {/* spread 문법  */}
          {/* <CourseItem {...course2} />
      <CourseItem {...course3} /> */}
        </div>
      </Card>
    </>
  );
}

export default CourseListCard;
