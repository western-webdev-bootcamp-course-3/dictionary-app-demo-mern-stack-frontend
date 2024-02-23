import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'layout/Root';
import { WordSearch, WordList, Error } from './page';
import { WordProvider } from 'context/WordContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <WordSearch />,
      },
      {
        path: 'word-list',
        element: <WordList />,
      },
    ],
  },
]);

const App = () => {
  return (
    <WordProvider>
      <RouterProvider router={router} />
    </WordProvider>
  );
};

export default App;
