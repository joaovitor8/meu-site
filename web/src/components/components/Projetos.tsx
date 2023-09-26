"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { useEffect, useState } from "react"
import { Repos } from "../outros/Types"

export const Projetos = () => {
  const [repos, setRepos] = useState<Repos[]>([])
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    GetRepos()
  }, [])

  const GetRepos = () => {
    axios.get("https://api.github.com/users/joaovitor8/repos")
      .then((res) => res.data)
      .then((res) => {
        const respositorios: Repos[] = []
        res.map((r: Repos) => {
          if (!r.topics.includes("book")) {
            respositorios.push(r)
          }
        })
        setRepos(respositorios)
      })
      .catch((error) => { console.error(error) })
  }

  const MostarMaisMenos = () => {
    if (mostrar === false) {
      setMostrar(true)
    } else {
      setMostrar(false)
    }
  }

  // console.log(repos)

  return (
    <div className={mostrar ? "flex flex-col items-center justify-center" : "h-screen flex flex-col items-center justify-center"} id="projetos">
      <div className="h-4/5 w-[95%] flex flex-col items-center justify-between p-5">
        <h2 className="text-3xl">Projetos</h2>
        <div className={mostrar ? "w-full mb-5 flex flex-col items-center mt-20" : "h-3/4 w-full mb-5 flex flex-col items-center"}>
          <div className="flex flex-wrap justify-center overflow-hidden">
            {repos.map((r, key) => (
              <Card key={key} className="w-2/5 m-1 max-md:w-[95%]">
                <CardHeader>
                  <CardTitle>{r.name}</CardTitle>
                  <CardDescription>{r.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-x-2">
                  {r.topics.map((t, key) => (
                    <span key={key}>{t}</span>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button><a href={r.html_url} target="_blank">Repositorio</a></Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div>
            <Button onClick={MostarMaisMenos} className="mt-5">Mostar {mostrar ? "Menos" : "Mais"}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
