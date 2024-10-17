'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Plus } from "lucide-react"

export function Create() {
    const [form, setForm] = useState({title:'',description:'',priority:'',assignTo:[]})
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form)
    }
  return (
    <div className="fixed bottom-5 right-5">
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" className='bg-zinc-950 text-zinc-100 rounded-full hover:bg-zinc-900 hover:text-zinc-100 w-10 p-0'><Plus /></Button>
      </SheetTrigger>
      <SheetContent className='bg-black text-white'>
        <SheetHeader>
          <SheetTitle className='text-white'>Create a task</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input onChange={handleChange} id="title" name='title' value={form.title} className="col-span-3 text-black" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input onChange={handleChange} id="description" name='description' value={form.description} className="col-span-3 text-black" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default Create