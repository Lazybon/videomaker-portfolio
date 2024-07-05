import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@/components/ui/button.tsx'
import { Input } from '@/components/ui/input.tsx'
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer.tsx'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center pt-[100px] h-full">
        <div className="flex flex-col items-center gap-3 w-[500px]">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-[100px] w-[100px]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-[100px] w-[100px] animate-spin"
              alt="React logo"
            />
          </a>
          <h1>Vite + React</h1>
          <Button onClick={() => setOpen(true)}>Open drawer</Button>
          <Input />
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="w-full">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default App
