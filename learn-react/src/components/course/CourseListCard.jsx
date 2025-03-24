import Card from '../Card';
import CourseItem from './CourseItem'

function CourseListCard({ items }) { // 객체 구조분해할당
  const [course1, course2, course3] = items; // 배열 구조분해할당당
  return (
   <>
   <Card title="강의 목록">
    <div className="courses">
      <CourseItem {...course1} />     {/* spread 문법  */}
      <CourseItem {...course2} />
      <CourseItem {...course3} />
    </div>
   </Card>
   </>

    
  );
}

export default CourseListCard;