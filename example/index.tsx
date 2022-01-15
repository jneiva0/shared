import { Button, chakra, ChakraProvider, Input } from '@chakra-ui/react'
import { Form, Formik, useField } from 'formik'
import React from 'react'
import 'react-app-polyfill/ie11'
import { render } from 'react-dom'
import { FormControl, Loading } from '../.'

const Abc = () => {
  const [field] = useField('nome')

  return <Input />
}

const SUFORM = chakra(Form)

const App = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <Formik
          initialValues={{ nome: '' }}
          onSubmit={(v: { nome: string }) => console.log(v)}
        >
          <SUFORM>
            <FormControl name='nome'>
              <Input />
            </FormControl>
            <Abc />
            <Button>abc</Button>
          </SUFORM>
        </Formik>
        <Loading />
      </ChakraProvider>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById('root'))
