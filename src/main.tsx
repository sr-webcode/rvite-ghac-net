import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import theme from '@theme/index'
import router from '@config/router'
import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider  } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>,
)