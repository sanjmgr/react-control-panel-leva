# Getting Started

## Install

```bash
npm i leva
```

## Basics

To use Leva, simply import `useControls` and use it anywhere in your app:

```jsx
import React from 'react'
import { useControls } from 'leva'

const ControlPanel = () => {
  const { name } = useControls({ name: 'Leva' })
  return name
}

const App = () => {
  return (
    <>
      <ControlPanel />
    </>
  )
}
```
