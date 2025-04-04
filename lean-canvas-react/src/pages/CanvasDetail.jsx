import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export default function CanvasDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  return (
    <div>
      CanvasDetail
      <p>id: {id}</p>
      <p>keyword: {searchParams.get('keyword')}</p>
      <p>hash: {location.hash}</p>
    </div>
  );
}
