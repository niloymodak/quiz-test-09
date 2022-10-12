import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Singlequiz from './components/Singlequiz/Singlequiz';



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Home></Home>
        },
        {
          path:'/home',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizid',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
          },
          element:<Singlequiz></Singlequiz>
        },

        {
          path:'/statistics',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>

        }




      ]
        
    }  
  ])

  return (
    <div className="App">
          <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
