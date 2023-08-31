"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../../components/ui/button"


export default function ThemeToggle() {
  const { setTheme } = useTheme()
  const [dark , setDark] = React.useState<boolean>(false)
  return (

        <Button onClick={()=>{
          setDark(!dark)
          dark ? setTheme("dark") : setTheme("light")
        }} variant="outline" size="icon">
          {dark  ? (
            <Moon />
          ) : (
          <Sun />
          ) }
        </Button>
     
  )
}
