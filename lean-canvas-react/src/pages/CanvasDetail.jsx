// import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCanvasById, updateTitle, updateCanvas } from '../api/canvas';
export default function CanvasDetail() {
  // const { id } = useParams();
  // const [searchParams] = useSearchParams();
  // const location = useLocation();
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleTitleChange = async title => {
    try {
      await updateTitle(id, title);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleCanvasChange = async updatedCanvas => {
    try {
      await updateCanvas(id, updatedCanvas);
      setCanvas(updatedCanvas);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      {/* {JSON.stringify(canvas)} */}
      {/* CanvasDetail
      <p>id: {id}</p>
      <p>keyword: {searchParams.get('keyword')}</p>
      <p>hash: {location.hash}</p> */}
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      {canvas && (
        <LeanCanvas canvas={canvas} onCanvasChange={handleCanvasChange} />
      )}
    </div>
  );
}
