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

import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import ViewToggle from '../components/ViewToggle';
import SearchBar from '../components/SearchBar';
import CanvasList from '../components/CanvasList';
import { createCanvas, getCanvases, deleteCanvas } from '../api/canvas';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Button from '../components/Button';

function Home() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(); // 초기값으로 모든 목록 조회 가능
  const [isGridview, setIsGridView] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoadingCreate, setIsLoadingCreate] = useState(false);

  async function fetchData(params) {
    // fetch API
    // const data = await fetch('http://localhost:8000/canvases')
    //   .then(res => res.json())
    //   .catch(console.error);
    // setData(data);

    // axios
    // const response = await axios.get('http://localhost:8000/canvases');
    // console.log(response);

    try {
      setIsLoading(true);
      setError(null); // 에러 상태도 초기화해야함 !

      // 데이터 조회 중
      await new Promise(resolve => setTimeout(resolve, 2000));

      // axios 모듈화
      const response = await getCanvases(params);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData({ title_like: searchText });
  }, [searchText]);

  const handleDeleteItem = async id => {
    // 성능 Bad
    // setData(data.filter(item => item.id !== id));

    // if문 중첩을 막기 위한 구조
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }

    // delete logic
    try {
      await deleteCanvas(id);
      fetchData({ title_like: searchText });
    } catch (err) {
      alert(err.message);
    }
  };

  // 성능 Bad
  // const filteredData = data.filter(item =>
  //   // debugger;
  //   item.title.toLowerCase().includes(searchText.toLowerCase()),
  // );

  const handleCreateCanvas = async () => {
    try {
      setIsLoadingCreate(true);
      await new Promise(resolver => setTimeout(resolver, 1000));
      await createCanvas();
      fetchData({ title_like: searchText });
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoadingCreate(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridview={isGridview} setIsGridView={setIsGridView} />
      </div>
      <div className="flex justify-end mb-6">
        <Button onClick={handleCreateCanvas} loading={isLoadingCreate}>
          등록하기
        </Button>
      </div>
      {isLoading && <Loading />}
      {error && (
        <Error
          message={error.message}
          onRetry={() => fetchData({ title_like: searchText })}
        />
      )}
      {!isLoading && !error && (
        <CanvasList
          // filteredData={filteredData}
          filteredData={data}
          isGridview={isGridview}
          searchText={searchText}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Home;
