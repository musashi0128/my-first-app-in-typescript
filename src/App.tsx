import React from 'react';
import  Counter from './Counter';
import CounterWithReducer from './CounterWithReducer'

interface AppProps {
  message?: string;
  description?:string
}

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

// interface AppProps {
//   message?: string;
//   description?:string
// }

// const App: React.FunctionComponent<AppProps> = (props) => {
//   const { message, description } = props
//   return (
//     <div>
//        <div>
//         {message}
//       </div>
//       <div>
//         {description}
//       </div>
//     </div>
//   );
// };

// App.defaultProps = {
//   message: 'Hi React-Typescript!',
//   description: 'This is React by Typescript'
// }

// type Props = {
//   message?: string;
//   description?:string
// }

// const App: React.FC<Props> = props => {
//   const {message,description} = props;
//   return (
//     <>
//       <div>
//         {message}
//       </div>
//       <div>
//         {description}
//       </div>
//   </>
//   )
// }

export default App;
