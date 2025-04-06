// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div>
//       Home Page!
//       <ul>
//         <li>
//           <Link to={'/canvases/1'}>1번 게시글</Link>
//         </li>
//         <li>
//           <Link to={'/canvases/2?keyword=canvas#helloworld'}>2번 게시글</Link>
//         </li>
//         <li>
//           <Link to={'/canvases/3'}>3번 게시글</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { useState } from 'react';
// import { Link } from 'react-router-dom';
import ViewToggle from '../components/ViewToggle';
import SearchBar from '../components/SearchBar';
import CanvasList from '../components/CanvasList';

function Home() {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: '친환경 도시 농업 플랫폼',
      lastModified: '2023-06-15',
      category: '농업',
    },
    {
      id: 2,
      title: 'AI 기반 건강 관리 앱',
      lastModified: '2023-06-10',
      category: '헬스케어',
    },
    {
      id: 3,
      title: '온디맨드 물류 서비스',
      lastModified: '2023-06-05',
      category: '물류',
    },
    {
      id: 4,
      title: 'VR 가상 여행 서비스',
      lastModified: '2023-06-01',
      category: '여행',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [isGridview, setIsGridView] = useState(true);

  const handleDeleteItem = id => {
    setDummyData(dummyData.filter(item => item.id !== id));
  };

  const filteredData = dummyData.filter(item =>
    // debugger;
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridview={isGridview} setIsGridView={setIsGridView} />
      </div>

      <CanvasList
        filteredData={filteredData}
        isGridview={isGridview}
        searchText={searchText}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default Home;
