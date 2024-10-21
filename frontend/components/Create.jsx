'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
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
import SelectDemo from "./SelectDemo"
import DatePickerDemo from "./DatePicker"

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
          <SheetTitle className='text-white text-2xl font-bold'>Create a task</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-8 mt-5">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input onChange={handleChange} id="title" name='title' value={form.title} className="col-span-3 bg-black text-white" />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea onChange={handleChange} id="description" name='description' value={form.description} className="col-span-3 bg-black text-white"/>
          </div>
          <div>
            <SelectDemo />
          </div>
          <div>
            <DatePickerDemo />
          </div>
        <SheetFooter >
          <SheetClose asChild>
            <Button type="submit" className='border border-zinc-800 bg-black'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}

export default Create




// arjun takes from user for self task as --- title ,description , end_d , priority and frontend  status, user gmail, list name.