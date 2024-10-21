import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-black">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-black">
        <SelectGroup>
          <SelectLabel className="bg-black text-white">Fruits</SelectLabel>
          <SelectItem value="apple" className="bg-black text-white">Apple</SelectItem>
          <SelectItem value="banana" className="bg-black text-white">Banana</SelectItem>
          <SelectItem value="blueberry" className="bg-black text-white">Blueberry</SelectItem>
          <SelectItem value="grapes" className="bg-black text-white">Grapes</SelectItem>
          <SelectItem value="pineapple" className="bg-black text-white">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectDemo