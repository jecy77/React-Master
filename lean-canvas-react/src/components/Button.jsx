import { FaSpinner } from 'react-icons/fa';
export default function Button({ loading, className, children, onClick }) {
  const clazz = [
    'bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    className,
  ].join(' ');

  const handleClick = () => {
    if (!onClick) {
      return;
    }
    if (loading) {
      return;
    }
    onClick();
  };
  return (
    <button onClick={handleClick} className={clazz}>
      <span className="flex items-center justify-center">
        {loading && <FaSpinner className="animate-spin mr-2" />}
        {children}
      </span>
    </button>
  );
}
