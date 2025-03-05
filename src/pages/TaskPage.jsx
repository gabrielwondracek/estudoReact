import { ChevronsLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
  return ( 
    <div>
        <button onClick={() => navigate(-1)}><ChevronsLeftIcon/></button>
        <h1>{title}</h1> 
        <p>{description}</p>
    </div>);
}
export default TaskPage;