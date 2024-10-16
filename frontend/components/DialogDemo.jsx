'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
    const [form, setForm] = useState({title:''})
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" className='w-[280px] h-[40px] bg-zinc-950 text-white hover:bg-zinc-900 hover:text-white'>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950">
        <DialogHeader>
          <DialogTitle className='text-white'>Create List</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-white">
              Name
            </Label>
            <Input onChange={handleChange} id="name" value={form.name} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default DialogDemo